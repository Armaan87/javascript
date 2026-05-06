const form = document.getElementById("form");
const input = document.getElementById("query");
const results = document.getElementById("results");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const value = input.value;

  fetch(`https://api.tvmaze.com/search/shows?q=${value}`)
    .then(response => response.json())
    .then(data => {



      results.innerHTML = "";


      for (let i = 0; i < data.length; i++) {

        const show = data[i].show;


        const article = document.createElement("article");


        const h2 = document.createElement("h2");
        h2.textContent = show.name;


        const a = document.createElement("a");
        a.href = show.url;
        a.target = "_blank";
        a.textContent = "View details";


        const img = document.createElement("img");
        img.src = show.image
  ? show.image.medium
  : "https://placehold.co/210x295?text=Not%20Found";
        img.alt = show.name;


        const div = document.createElement("div");
        div.innerHTML = show.summary;


        article.appendChild(h2);
        article.appendChild(a);
        article.appendChild(img);
        article.appendChild(div);


        results.appendChild(article);
      }
    });
});