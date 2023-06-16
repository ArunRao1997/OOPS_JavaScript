function parent() {
    var a = 20
    function child1() {
        let b = 10
        console.log(a)

        function child2() {
            console.log(a + b)
        }
        return child2
    }
    return child1
}

let child1Received = parent()
// console.log(child1Received)
// child1Received()

let child2Received = child1Received()

child2Received()
