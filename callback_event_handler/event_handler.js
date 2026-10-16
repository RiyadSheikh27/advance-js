// Event Handler
const button = document.getElementById("myBtn");

button.addEventListener("click", function () {
  console.log("The button was clicked!");
});

// The Event Object
// Inside the handler, you can get information about the event:
button.addEventListener("click", function (event) {
  console.log(event.target);
});


// Event Handlers in Node.js (EventEmitter)
// Your `nodejs` folder has an event emitter. It is the same concept in Node.js:
const EventEmitter = require("events");
const emitter = new EventEmitter();

// Register the handler
emitter.on("greet", function (name) {
  console.log("Hello, " + name);
});

// Trigger the event
emitter.emit("greet", "Karim");
```