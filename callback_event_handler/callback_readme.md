## 1. What is a Callback?

A **callback** is a function that is passed as an argument to another function and is later called (invoked) from inside that function — usually after a specific task is completed or at a certain time.

In JavaScript, functions are **first-class citizens**. This means a function can be:
- Stored in a variable
- Passed as an argument
- Returned from another function

This is what makes callbacks possible.

### Simple Example

```javascript
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Rahim", sayBye);
```

**Output:**
```
Hello, Rahim
Goodbye!
```

Here, `sayBye` is the callback function. The `greet` function finishes its own work and then calls `callback()`.

---

## 2. Why Do We Need Callbacks?

JavaScript is **single-threaded**, meaning it can do only one thing at a time. However, some operations take time, such as:

- Fetching data from a server
- Reading a file
- Running a timer

It is not practical to stop the entire program and wait for these operations to finish. So we say:
**“Start the work, and when it’s done, run this function.”**
That “this function” is the callback.

---

## 3. Synchronous vs Asynchronous Callback

### Synchronous Callback

Runs immediately, in order.

```javascript
const numbers = [1, 2, 3];

numbers.forEach(function (num) {
  console.log(num * 2);
});
```

The functions passed to `forEach`, `map`, `filter`, etc. are **synchronous callbacks**.

### Asynchronous Callback

Runs later, after the work is finished.

```javascript
console.log("Start");

setTimeout(function () {
  console.log("Ran after 2 seconds");
}, 2000);

console.log("End");
```

**Output:**
```
Start
End
Ran after 2 seconds
```

Notice that “End” is printed before the timeout message. While `setTimeout` is waiting, JavaScript continues to the next line.

---

## 4. Callbacks in Node.js (Error-First Pattern)

In Node.js, the convention is that the **first parameter** of a callback is an `error`, and the **second parameter** is the result.

```javascript
const fs = require("fs");

fs.readFile("data.txt", "utf8", function (err, data) {
  if (err) {
    console.log("An error occurred:", err.message);
    return;
  }
  console.log("File content:", data);
});
```

Always check for `err` first. Only use `data` if there is no error.
You will see this pattern frequently in the `file_processing` folder.

---

## 5. Callback Hell (The Problem)

When you nest one callback inside another, and then another, the code keeps shifting to the right and becomes hard to read:

```javascript
getUser(1, function (user) {
  getOrders(user.id, function (orders) {
    getPayment(orders[0], function (payment) {
      console.log(payment);
    });
  });
});
```

This is known as **Callback Hell** or the **Pyramid of Doom**.

The solution to this problem is **Promises** and **async/await**, which you will learn in the Asynchronous Programming topic.
