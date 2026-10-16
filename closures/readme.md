# Closures
A closure is the combination of a function and the lexical environment within which that function was declared. In other words, a closure givees you access to an outer function's scope from an inner function. and its remembers the environment in which it was created, even if that environment is no longer active.
Closures are able to capture variables in all these scopes, which we will introduce later.

## Why is it Useful?
Closures are useful for:

Data Privacy: You can create private variables that can't be accessed directly from outside the function.

Function Factories: You can create functions that generate other functions with specific behaviors.

Callbacks and Event Handlers: Closures are often used in asynchronous programming, like handling events or making API calls.

```javascript
function createCounter() {
    let count = 0; // Private variable

    return function() {
        count++; // Accessing and modifying the private variable
        return count;
    };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

## What’s Happening Here?
* The createCounter function initializes a private variable count to 0.

* It returns an inner function that increments and returns count.

* Every time you call counter(), it remembers the value of count from the previous call, thanks to the closure.

## Key Points to Remember
* Scope Chain: A closure has access to its own scope, the outer function's scope, and the global scope.

* Memory Efficiency: Closures can sometimes lead to memory leaks if not used carefully, because they keep references to variables even after the outer function has finished executing.

* Practical Use Cases:

    - Creating private variables.

    - Implementing function factories.

    - Handling asynchronous operations (e.g., callbacks, promises).