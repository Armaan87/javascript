const shouldCalculate = confirm("Should I calculate the square root?");

if (shouldCalculate) {
    const num = Number(prompt("Enter a number:"));

    if (num < 0) {
        document.write("The square root of a negative number is not defined.");
    } else {
        const sqrt = Math.sqrt(num);
        document.write("The square root of " + num + " is " + sqrt + ".");
    }
} else {
    document.write("The square root is not calculated.");
}