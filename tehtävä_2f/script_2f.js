function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
document.write("<ul>");

let result;
do {
    result = rollDice();
    document.write("<li>" + result + "</li>");
} while (result !== 6);

document.write("</ul>");