/**
 * A regular expression is a sequence of characters that forms a search pattern.
 * A search pattern can be use for text search and text replacing
 * Syntax: pattern/modifiers
 * There are modifieres like: i(case insensetive),g(global match),m(multiline matching),d(denote start and end)
 * Parts of regular expression
 * Modifier
 * Quantifier(n+,n*,n?)
 * Meta Character(\d,\s,\b,\uxxxx)
 */

let paragraph = "A regular expression is a sequence of characters that forms a search pattern.";
let pattern = /Regular/di;

// const r = paragraph.search(pattern)
const r = paragraph.match(pattern)
console.log(r)

function containsDigit(){
    let pattern = /^\d+$/;
    let r = "123456".match(pattern);
    console.log(r)
}
containsDigit()

function isValidEmail(email){
    let pattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    let r = email.match(pattern)
    console.log(r)
}

isValidEmail("@missingusername.com"); //invalid


function isValidBdPhone2(phone){
    // let pattern = /^[^+][^88]01[0-9]+{9}$/g
    // let pattern = /^(?:\+880|880|01)[0-9]{9}$/;
    let pattern = /^(?:\+880|880|01)[0-9]{9}$/;

    let r = phone.match(pattern)
    console.log(r)
}

function isValidBdPhone(phone) {
    let pattern = /^(?:\+8801|8801|01)[0-9]{9}$/;
    let r = phone.match(pattern);
    console.log(r ? "Valid" : "Invalid");
}

isValidBdPhone("+8801738923828")
isValidBdPhone("8801738923828")
isValidBdPhone("01738923828")
isValidBdPhone("02738923828")
//01738923828
//+8801738923828
//8801738923828