// var name = "shuvo";

// {
//     var name = "Hasan";
// }

// console.log(name)


/**
 * Global Scope
 * Block Scope: A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block.
 * Function Scope: Accessable only inside the function. A function always create a scope when it calls.
 */

/**
 * var is in the global scope or function scope | let and const is in the block scope
 * var can be re declared                       | let and const are not
 * var default is undefined                    |  let and const are ReferenceError
 */

// var amount = 1000;
// let hasDiscount=true;

// {
//     if(hasDiscount){
//         var amount = amount - 10;
//         console.log(`Payable amount after discount: ${amount}`)
//     }
// }

// console.log(amount)

// In the above example there is a issue with the amount variable. when I re declared and used keep the discounted amount then it's change the global amount variable value.
// We can solve it by replace the var with the let

let amount = 1000;
let hasDiscount=true;

{
    if(hasDiscount){
        let amount = amount - 10;
        console.log(`Payable amount after discount: ${amount}`)
    }
}

console.log(amount)