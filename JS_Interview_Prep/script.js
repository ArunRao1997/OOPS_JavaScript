function parent(){
    var a = 10
    function child(){
        console.log(a)
        function child2(){
            console.log(a)
    }
    child2()
    }
    child()
}

parent()