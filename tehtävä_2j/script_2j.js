const numCandidates = Number(prompt("Enter number of candidates:"));
const candidates = [];
for (let i = 0; i < numCandidates; i++) {
    const name = prompt(`Enter name for candidate ${i + 1}:`);
    candidates.push({ name: name, votes: 0 });
}

const numVoters = Number(prompt("Enter number of voters:"));

for (let i = 0; i < numVoters; i++) {
    const vote = prompt(`Voter ${i + 1}, enter candidate name to vote:`);

    if (vote === "" || vote === null) {
        continue;
    }

    const candidate = candidates.find(c => c.name.toLowerCase() === vote.toLowerCase());
    if (candidate) {
        candidate.votes += 1;
    } else {
        document.write(`Invalid vote for "${vote}" ignored.<br>`);
    }
}
const sortedCandidates = candidates.slice().sort((a, b) => b.votes - a.votes);

const topVotes = sortedCandidates[0].votes;
const winners = sortedCandidates.filter(c => c.votes === topVotes);

if (winners.length === 1) {
    document.write(`<h3>The winner is ${winners[0].name} with ${winners[0].votes} votes.</h3>`);
} else {
    const names = winners.map(c => c.name).join(", ");
    document.write(`<h3>It's a tie between: ${names}, each with ${topVotes} votes.</h3>`);
}

document.write("<h4>Results:</h4>");
document.write("<ul>");
for (let i = 0; i < sortedCandidates.length; i++) {
    document.write(`<li>${sortedCandidates[i].name}: ${sortedCandidates[i].votes} votes</li>`);
}
document.write("</ul>");