const form = document.getElementById("form");
const target = document.getElementById("target");

form.addEventListener("submit", function (event) {
  event.preventDefault();


  const firstName = document.querySelector('input[name="firstname"]').value;
  const lastName = document.querySelector('input[name="lastname"]').value;


  target.textContent = `Your name is ${firstName} ${lastName}`;
});