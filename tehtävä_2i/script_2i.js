function even(arr) {
    const evens = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evens.push(arr[i]);
        }
    }
    return evens;
}

const numbers = [2, 7, 4, 9, 10];

const evenNumbers = even(numbers);

document.write("<h3>Original array:</h3>");
document.write("<p>" + numbers.join(", ") + "</p>");

document.write("<h3>Even numbers array:</h3>");
document.write("<p>" + evenNumbers.join(", ") + "</p>");