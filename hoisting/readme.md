## Hoisting কী?

**Hoisting মানে JavaScript code execute করার আগে declaration-গুলোকে scope-এর শুরুতে available করে রাখে।**

তবে একটা গুরুত্বপূর্ণ correction:

> JavaScript আসলে তোমার code-এর declaration physically উপরে সরিয়ে দেয় না। এটা JavaScript-এর **creation/initialization phase-এর behavior**।

### 1. `var` এর ক্ষেত্রে

```js
console.log(name);

var name = "Riyad";