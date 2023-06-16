const fs = require('fs')

// fs.readFile('f1.txt', cb)

// function cb(err, data) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('This is File1 data -> ' + data)
//     }
// }

// let promiseReadFile = fs.promises.readFile('f1.txt')
// let promiseReadFile2 = fs.promises.readFile('f2.txt')
// let promiseReadFile3 = fs.promises.readFile('f3.txt')

// promiseReadFile.then(function(data){
//     console.log('This is file1 data -> '+data)
// })

// promiseReadFile.catch(function(err){
//     console.log('This is our error message -> '+err)
// })



// promiseReadFile2.then(function(data){
//     console.log('This is file2 data -> '+data)
// })

// promiseReadFile2.catch(function(err){
//     console.log('This is our error message -> '+err)
// })



// promiseReadFile3.then(function(data){
//     console.log('This is file3 data -> '+data)
// })

// promiseReadFile3.catch(function(err){
//     console.log('This is our error message -> '+err)
// })

let f1p = fs.promises.readFile('f1.txt')
let f2p = fs.promises.readFile('f2.txt')
let f3p = fs.promises.readFile('f3.txt')

function readFileCallback(data){
    console.log('This is the data -> '+data)
}

function handleError(err){
    console.log('This is the error message -> '+err)
}

f1p.then(readFileCallback)
f2p.then(readFileCallback)
f3p.then(readFileCallback)

f1p.catch(handleError)
f2p.catch(handleError)
f3p.catch(handleError)