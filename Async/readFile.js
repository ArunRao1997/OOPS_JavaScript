const fs = require('fs')

// Synchronously read files
// console.log('before')

// let data1 = fs.readFileSync('f1.txt')
// let data2 = fs.readFileSync('f2.txt')
// let data3 = fs.readFileSync('f3.txt')

// console.log('This is data1 ->' + data1)
// console.log('This is data2 ->' + data2)
// console.log('This is data3 ->' + data3)

// console.log('after')


// Asynhronous way

console.log('before')

fs.readFile('f1.txt', readFileCallback1)

function readFileCallback1(err, data) {
    if (err) {
        console.log(err)
    }
    else {
        console.log('File 1 data ->' + data)
    }
}

fs.readFile('f2.txt', readFileCallback2)

function readFileCallback2(err, data) {
    if (err) {
        console.log(err)
    }
    else {
        console.log('File 2 data ->' + data)
    }
}

fs.readFile('f3.txt', readFileCallback3)

function readFileCallback3(err, data) {
    if (err) {
        console.log(err)
    }
    else {
        console.log('File 3 data ->' + data)
    }
}

console.log('after')