var fs = require("fs");

//Asynchronicity, Tennessee
fs.readFile('input.txt', function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("Asynchronous read: " + data.toString());
});

//Synchronicity, Tennessee
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Alright, alright, I'm done.")
