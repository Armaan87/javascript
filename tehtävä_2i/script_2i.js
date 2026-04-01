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
console.log("Original array:", numbers);
console.log("Even numbers array:", evenNumbers);