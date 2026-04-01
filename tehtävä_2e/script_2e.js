const numbers = [];

while (true) {
    const num = Number(prompt("Enter a number:"));

    if (numbers.includes(num)) {
        document.write("Number already given: " + num + "<br>");
        break;
    }

    numbers.push(num);
}

numbers.sort(function(a, b) {
    return a - b;
});
document.write("<br>Numbers in ascending order:<br>");

for (let i = 0; i < numbers.length; i++) {
    document.write(numbers[i] + "<br>");
}