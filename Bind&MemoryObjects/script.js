function GetEmailFn(firstName, lastName) {
    return (`${this.firstName}.${this.lastName}@gmail.com`)
}

function chooseSubject(sub1, sub2) {
    return `${sub1} and ${sub2}`
}

function chooseBatches(batch1, batch2, batch3) {
    //return `${batch1} and ${batch2} and ${batch3}`
    return [batch1,batch2,batch3]
}
let student = {
    firstName: 'Arun',
    lastName: 'Nayineni',
    age: 25,

    getEmail: function () {
        console.log(`${this.firstName}.${this.lastName}@gmail.com`)
    }
    //getEmail: GetEmailFn(this.firstName, this.lastName)
}

let teacher1 = {
    firstName: 'Swamy',
    lastName: 'Nayineni',
    age: 50
}

let teacher2 = {
    firstName: 'Harish',
    lastName: 'Nayineni',
    age: 30
}

let arr1 = ['septBatch', 'NovBatch', 'DecBatch']

let arr2 = ['JuneBatch', 'JulyBatch', 'AugBatch']
student.getEmail.call(student) // function borrowing
// teacher.getEmail()
console.log(GetEmailFn.call(teacher1)) //global function call for different objects

console.log(chooseSubject.call(teacher2, 'Mathematics', 'Sanskrit'))
console.log(chooseSubject.call(teacher1, 'Geography', 'English'))

// apply 

console.log(chooseBatches.apply(teacher1, ['Batch1', 'Batch3', 'Batch2']))

console.log(chooseBatches.apply(teacher1, arr1))
// console.log(chooseBatches.apply(teacher2, arr2))
console.log(chooseBatches.apply(teacher2, ['JuneBatch', 'JulyBatch', 'AugBatch']))

// Bind 
console.log(GetEmailFn.bind(teacher1))
let callLater = GetEmailFn.bind(teacher1)
console.log(callLater)
console.log(callLater())
