const count = Number(prompt("Enter number of participants:"));

const names = [];

for (let i = 0; i < count; i++) {
    names.push(prompt("Enter name:"));
}
names.sort();

document.write("<ol>");
for (let i = 0; i < names.length; i++) {
    document.write("<li>" + names[i] + "</li>");
}
document.write("</ol>");