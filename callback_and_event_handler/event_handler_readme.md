## 1. What is an Event Handler?

An **event handler** is a function that runs automatically **when an event happens**. An event can be a click, a key press, a page load, a mouse move, and so on.

In fact, an event handler is a kind of callback. The difference is that it is called not when a task finishes, but **when something happens**.

### Example in the Browser

```javascript
const button = document.getElementById("myBtn");

button.addEventListener("click", function () {
  console.log("The button was clicked!");
});
```

Here:
- `"click"` is the event
- The function inside is the event handler (callback)

### The Event Object

Inside the handler, you can get information about the event:

```javascript
button.addEventListener("click", function (event) {
  console.log(event.target);
});
```

---

## 2. Event Handlers in Node.js (EventEmitter)

Your `nodejs` folder has an event emitter. It is the same concept in Node.js:

```javascript
const EventEmitter = require("events");
const emitter = new EventEmitter();

// Register the handler
emitter.on("greet", function (name) {
  console.log("Hello, " + name);
});

// Trigger the event
emitter.emit("greet", "Karim");
```

- `on()`: sets the handler
- `emit()`: triggers the event and runs the handler

---

## 3. Callback vs Event Handler

| Topic | Callback | Event Handler |
|---|---|---|
| When it runs | When a task finishes | When an event happens |
| How many times | Usually once | Every time the event happens |
| Examples | `setTimeout`, `fs.readFile` | `click`, `emitter.on()` |
| Relationship | The core concept | A special form of callback |

---