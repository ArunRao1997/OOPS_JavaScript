// let hello1 = 'Hello 1'

// let hello2 = 'Hello 2'

// console.log(hello1)

// for(let i=0; i< 10000000000; i++){

// }

// console.log(hello2)

//Asynchronous approach

let hello3 = 'Hello 3'

let hello4 = 'Hello 4'

console.log(hello3)

setTimeout(function () {
    console.log('This is asynchronous output')
}, 1000)

console.log(hello4)
