const trigger = document.getElementById("trigger");
const img = document.getElementById("target");


trigger.addEventListener("mouseover", function() {
  img.src = "picB.jpg";
});


trigger.addEventListener("mouseout", function() {
  img.src = "picA.jpg";
});