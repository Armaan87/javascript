const form = document.getElementById("form");
const input = document.getElementById("address");
const times = document.getElementById("times");


const map = L.map("map").setView([60.1708, 24.9375], 10);


L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);


async function getCoordinates(address) {
  const res = await fetch(`https://api.digitransit.fi/geocoding/v1/search?text=${address}`);
  const data = await res.json();

  const coords = data.features[0].geometry.coordinates;
  return [coords[1], coords[0]]; // lat, lon
}


async function getRoute(fromCoords, toCoords) {
  const query = `
  {
    plan(
      from: {lat: ${fromCoords[0]}, lon: ${fromCoords[1]}},
      to: {lat: ${toCoords[0]}, lon: ${toCoords[1]}}
    ) {
      itineraries {
        startTime
        endTime
        legs {
          mode
          legGeometry {
            points
          }
        }
      }
    }
  }
  `;

  const res = await fetch("https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
  });

  const data = await res.json();
  return data.data.plan.itineraries[0];
}


function decodePolyline(str) {
  let index = 0, lat = 0, lng = 0, coordinates = [];

  while (index < str.length) {
    let b, shift = 0, result = 0;
    do {
      b = str.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    let dlat = ((result & 1) ? ~(result >> 1) : (result >> 1));
    lat += dlat;

    shift = 0;
    result = 0;
    do {
      b = str.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    let dlng = ((result & 1) ? ~(result >> 1) : (result >> 1));
    lng += dlng;

    coordinates.push([lat / 1e5, lng / 1e5]);
  }

  return coordinates;
}


form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const address = input.value;


  const from = await getCoordinates(address);


  const to = await getCoordinates("Karaportti 2, Espoo");

  const route = await getRoute(from, to);


  const start = new Date(route.startTime);
  const end = new Date(route.endTime);

  times.textContent = `Start: ${start.toLocaleTimeString()} - End: ${end.toLocaleTimeString()}`;


  route.legs.forEach(leg => {
    const coords = decodePolyline(leg.legGeometry.points);
    L.polyline(coords).addTo(map);
  });

  map.setView(from, 13);
});