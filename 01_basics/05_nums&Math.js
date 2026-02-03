const score = 100
const balance = new Number(1000)

console.log(score)
console.log(balance)
// in console console.log(balance) this gives output as Number{1000} and i get to access it protoype.
// balance = new Number(1000) this is a Number object (wrapper class)
//Every JavaScript object has a hidden link to another object called its prototype, which is used for inheritance
//A prototype is an object that other objects can borrow properties and methods from

console.log(score.toString())
//toString is a function (method), and () means “call / run this function”.
//toFixed(2) give 2 .00 at the end of your integer 
console.log(balance.toFixed(2))

/*------------------------------------------MATHS-------------------------------------------------------------------*/
//Math is a built-in collection of ready-made functions provided by JavaScript
console.log(Math.abs(-4))
console.log(Math.round(4.7))

console.log(Math.random())
//values always between 0-1
console.log((Math.random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min + 1))+min)
//floor give int value 
//max-min give the value in which range i want it and 
//+1 avoids the 0 scenario
//+min gve value at least bigger than min