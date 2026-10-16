/**
 * Hoisting
 * JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, 
 * prior to execution of the code.
 * It's default behaviour of the JS. If you use the variable before declaration, it's called hoisted.
 * And JS automatically moving all of the decalration in the top of the current scope during the compile phase not execution phase. It's called hoisting.
 * JS initialization are not hoisted. 
 * So if you declare the variable with the var keyword then it's return the initialized value that initialize before declare. 
 * But if you decalre with const or let then it will throw an ReferenceError
 * Why Moving Declarations to the Top is Useful
 * By moving declarations to the top, the interpreter avoids potential issues with accessing undeclared variables and ensures that code parsing is predictable. 
 * However, this feature also introduces confusion if not understood correctly, which is why modern JavaScript encourages using let and const for block-scoped variables, 
 * as they do not allow accessing variables before their declaration (temporal dead zone).
 */

// Example 1: here the amount variable is hoisted
amount = 10
console.log(amount)
var amount;

// Example 2

payable_amount = 50
console.log(payable_amount)
let payable_amount;


/**
 * JavaScript in strict mode does not allow variables to be used if they are not declared.
 * In summary, hoisting exists to:

    Simplify the code structure.
    Enable flexible function usage.
    Maintain backward compatibility.
    Separate declaration from initialization.
    Clarify scoping rules.
    However, understanding and consciously managing hoisting is crucial to writing clear and bug-free JavaScript code.
 */