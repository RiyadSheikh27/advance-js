// Callback
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Rahim", sayBye);

// Output
// Hello, Rahim
// Goodbye!

// Sync Callback
const numbers = [1, 2, 3];

numbers.forEach(function (num) {
  console.log(num * 2);
});

Async Callback
console.log("Start");

setTimeout(function () {
  console.log("Ran after 2seconds");
}, 2000);

console.log("End");
// Output
// Start
// End
// Ran after 2seconds

// Callbacks in Node.js (Error-First Pattern)
const fs = require("fs");

fs.readFile("data.txt", "utf8", function (err, data) {
  if (err) {
    console.log("An error occurred:", err.message);
    return;
  }
  console.log("File content:", data);
});
// Always check for err first. Only use data if there is no error.
// You will see this pattern frequently in the file_processing folder.

// Callback Hell (The Problem)
// When you nest one callback inside another, and then another, the code keeps shifting to the right and becomes hard to read:
getUser(1, function (user) {
  getOrders(user.id, function (orders) {
    getPayment(orders[0], function (payment) {
      console.log(payment);
    });
  });
});