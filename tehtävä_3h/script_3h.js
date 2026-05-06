const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operation = document.getElementById("operation");
const result = document.getElementById("result");
const button = document.getElementById("calcBtn");

button.addEventListener("click", function () {
  const a = Number(num1.value);
  const b = Number(num2.value);
  const op = operation.value;

  let answer;

  if (op === "add") {
    answer = a + b;
  } else if (op === "sub") {
    answer = a - b;
  } else if (op === "mul") {
    answer = a * b;
  } else if (op === "div") {
    answer = a / b;
  }

  result.textContent = answer;
});