//let a = 2

// undefined, null, 0, '', false --> These are Falsy values in JS
// Everything other than these are Truthy values

// if (a) {
//     console.log('This is a truthy value')
// }
// else {
//     console.log('This is a Falsy value')
// }

// Difference between == and ===

let a = 2
let b = '2'

// console.log(a==b) // loose checking  / here only values are being checked

console.log(a===b) // strict checking / here values as well as type is checked

// operator - typeof Operator

let c = {name:'Arun'} // object
console.log(typeof c)

// Array.isArray - Boolean Method

let checkArray = Array.isArray(c)
console.log(checkArray)


