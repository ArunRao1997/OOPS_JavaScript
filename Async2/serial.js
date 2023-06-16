const fs = require('fs')

// console.log()

let f1p = fs.promises.readFile('f1.txt')

function cb1(data) {
    console.log('This is file1 data -> ' + data)
    let f2p = fs.promises.readFile('f2.txt')
    return f2p
}

function cb2(data) {
    console.log('This is file2 data -> ' + data)
    let f3p = fs.promises.readFile('f3.txt')
    return f3p
}

function cb3(data) {
    console.log('This is file3 data -> ' + data)
}

// f1p.then(function (data) {
//     console.log('This is file1 data -> ' + data)
// })

f1p.then(cb1).then(cb2).then(cb3)