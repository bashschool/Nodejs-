



// const name = "Abhishek Kushwaha", age = "21", height = "5'8\"";
// let hobbies = ["Reading", "Writing", "Coding"];
// hobbies.push("Gaming");
// console.log(`My Name is ${name} and I am ${age} years old.`);
// console.log(`I stand at ${height}.`);
// console.log(`Some of my Hobbies are : ${hobbies[0]},
// ${hobbies[1]} & ${hobbies[2]} & ${hobbies[3]}`);



const abhishek = require("./cal.js")
const fs = require('fs')

console.log(abhishek)

fs.readFile('name.txt', 'utf-8', function (err, data) {
    if (err) throw err;
    console.log(data)
})


fs.writeFileSync('name.txt', 'this was edited by nodejs',)


fs.readFile('name.txt', 'utf-8', function (err, data) {
    if (err) throw err;
    console.log(data)
})
