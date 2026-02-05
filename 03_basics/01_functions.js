// (){} this is function definition 
// Function sayMyName(){ } ; here funtion is key word, sayMyName is name of func 
// (){ } this is syntax to define funtion 
// sayMyname is reference to it, and sayMyName() this calls the funtion 
function add(num1, num2){
    return num1+num2
}

const result=add(3,5)
console.log("Result : ",result)
// if no argument is passed we get undefined as argument

function calculateCartPrice(...num){
    return num
}

console.log(calculateCartPrice(200,400,500)) //here it is called as REST and in arry or obj its alled as SPREAD
// it returns the value in array
//if (val1,val2,...num) first 2 values goes to first 2 var and rest in arrzay in num

const obj = {
    name:"Utkarsh",
    number:"7"
}

function handelObject(anyobj){
    console.log(`${anyobj.name} fav number is ${anyobj.number}`)
}

handelObject(obj)