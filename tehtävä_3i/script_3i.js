const input = document.getElementById("calc");
const button = document.getElementById("btn");

button.addEventListener("click", function () {
  const value = input.value;

  let result;

  if (value.includes("+")) {
    const parts = value.split("+");
    result = parseInt(parts[0]) + parseInt(parts[1]);

  } else if (value.includes("-")) {
    const parts = value.split("-");
    result = parseInt(parts[0]) - parseInt(parts[1]);

  } else if (value.includes("*")) {
    const parts = value.split("*");
    result = parseInt(parts[0]) * parseInt(parts[1]);

  } else if (value.includes("/")) {
    const parts = value.split("/");
    result = parseInt(parts[0]) / parseInt(parts[1]);
  }

  alert(result);
});