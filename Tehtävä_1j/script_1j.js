
const numDice = Number(prompt("Enter the number of dice:"));
const targetSum = Number(prompt("Enter the desired sum of eyes:"));

const simulations = 10000;
let successCount = 0;

for (let i = 0; i < simulations; i++) {
    let sum = 0;
    for (let j = 0; j < numDice; j++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        sum += roll;
    }
    if (sum === targetSum) {
        successCount++;
    }
}

const probability = (successCount / simulations) * 100;

document.write(
    `Probability to get sum ${targetSum} with ${numDice} dice is ${probability.toFixed(2)}%`
);