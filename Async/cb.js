let dataArray = [
    { name: 'Arun', age: 25 },
    { name: 'Harish', age: 30 }
]

function getData() {
    setTimeout(function () {
        let output = ''
        dataArray.forEach(function (data) {
            output += `<li>${data.name}</li>`
        })
        document.body.innerHTML = output
    }, 2000)
}

function CreateData(newData, cb ) {
    setTimeout(function () {
        dataArray.push(newData)
        cb()
    }, 3000)
}

CreateData({ name: 'Rao', age: 26 }, getData)
// getData()

console.log(dataArray)