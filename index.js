/*'use strict'
let a = 2
console.log(a)*/

// console.log(this) --> {}

// This inside a function

// function test(){
//     console.log(this)
// }

// test() // global object

// This keyword from a function inside an object
// let obj = {
//     name: 'Arun',
//     age: 25,
//     gender: 'male',
//     getThis: function () {
//         console.log(this.age)
//     }
// }

// obj.getThis()

let obj2 ={
    name:'Raao',
    age:26,
    test:function f(){
        function g(){
            console.log(this)
        }
        g()
    }
}

obj2.test()
