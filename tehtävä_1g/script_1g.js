
const numRolls = Number(prompt("How many dice rolls?"));

let sum = 0;

for (let i = 0; i < numRolls; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    sum += roll;
}

document.write("The sum of " + numRolls + " dice rolls is: " + sum);