function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}
const sides = Number(prompt("Enter the number of sides on the dice:"));

document.write("<ul>");
let result;
do {
    result = rollDice(sides);
    document.write("<li>" + result + "</li>");
} while (result !== sides);

document.write("</ul>");