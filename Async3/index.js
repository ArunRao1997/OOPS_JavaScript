function placeOrder(drink) {
    return new Promise(function (resolve, reject) {
        if (drink === 'coffee') {
            resolve('Order for coffee has been placed')
        } else {
            reject('Order cannot be placed')
        }
    })
}

function processOrder(orderPlaced) {
    return new Promise(function (resolve) {
        resolve(`${orderPlaced} and Served`)
    })
}

function generateBill(processedOrder) {
    return new Promise(function (resolve) {
        resolve(`${processedOrder} and bill generated with Rs.200/-`)
    })
}
// placeOrder('coffee').then(function(orderStatus){
//     console.log(orderStatus)
//     return orderStatus
// }).then(function(orderStatus){
//     let orderIsProcessed = processOrder(orderStatus)
//     //console.log(orderIsProcessed)
//     return orderIsProcessed
// }).then(function(orderIsProcessed){
//     console.log(orderIsProcessed)
//     return orderIsProcessed
// }).then(function(orderIsProcessed){
//     let billGenerated = generateBill(orderIsProcessed)
//     return billGenerated
// }).then(function(billGenerated){
//     console.log(billGenerated)
// }).catch(function(err){
//     console.log(err)
// })

// async and await

async function serveOrder() {
    try {
        let orderStatus = await placeOrder('coffee')
        console.log(orderStatus)
        let processedOrder = await processOrder(orderStatus)
        console.log(processedOrder)
        let generatedBill = await generateBill(processedOrder)
        console.log(generatedBill)
    } catch (error) {
        console.log(error)
    }
}

serveOrder()