let a = 10
const b = 20
var c = 30 //dosent follow scope rules

console.log(a)
console.log(b)
console.log(c)

//windows scope, node scope, browser scope all are diffrent 
//closur imp topic

function one(){
    const user = "Utkarsh"
    function two(){
        const website = "Portfolio"
    }
    two()
}

one()

console.log(addOne(7)) //but if we declare this above the definition it will give error
 // this wont give error it will read the function
function addOne(num) {
    return num+1
}

const addTwo = function(num){ //this right will be called expression not function
    return(num+2)
}
console.log(addTwo(7)) //but if we declare this above the definition it will give error

//hoisting is all this concept