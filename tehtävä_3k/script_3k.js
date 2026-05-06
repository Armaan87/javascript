const target = document.getElementById("target");

const dialog = document.querySelector("dialog");
const dialogImg = dialog.querySelector("img");
const closeBtn = dialog.querySelector("span");


for (let i = 0; i < picArray.length; i++) {

  const article = document.createElement("article");
  article.classList.add("card");

  const h2 = document.createElement("h2");
  h2.textContent = picArray[i].title;

  const figure = document.createElement("figure");

  const img = document.createElement("img");
  img.src = picArray[i].medium;
  img.alt = picArray[i].title;

  const figcaption = document.createElement("figcaption");
  figcaption.textContent = picArray[i].caption;

  const p = document.createElement("p");
  p.textContent = picArray[i].description;

  figure.appendChild(img);
  figure.appendChild(figcaption);

  article.appendChild(h2);
  article.appendChild(figure);
  article.appendChild(p);


  article.addEventListener("click", function () {
    dialogImg.src = picArray[i].large;
    dialogImg.alt = picArray[i].title;
    dialog.showModal();
  });

  target.appendChild(article);
}


closeBtn.addEventListener("click", function () {
  dialog.close();
});