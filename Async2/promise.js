let myPromise = new Promise(function (resolve, reject) {
    const a = 4
    const b = 5

    if (a === b) {
        resolve('Yes, they are equal')
    } else {
        reject('No, they are not equal')
    }
})

// console.log(myPromise)

// then method
myPromise.then(function(data){
    console.log(data)
})

// catch method 
myPromise.catch(function(error){
    console.log('This is my Error Statement -> '+error)
})