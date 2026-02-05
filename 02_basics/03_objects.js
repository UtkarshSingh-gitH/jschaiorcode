//objects can be declared in two ways 1) literalls 2) constructor

//singleton -- so when object is created via constructor its singleton, on of a kind 
//object.create

//object literals (key:value pairs)
const mysym = Symbol("key1")

const jsUser = {
    name: "Utkarsh", //key are consideered as String by defult
    age: 23,
    location: "pune",
    isLoggedin: false,
    mail: "random@gmail.com",
    lastLoginDays: ["Monadys", "Wdnesday"],
    "full name": "Utkarsh Singh",
    [mysym]: "symbol1"
}

console.log(jsUser.name)
console.log(jsUser["mail"])
console.log(jsUser[mysym])
console.log(jsUser["full name"]) //this method is important because if key is declared as string 
//which is done automatically, you need this [] style to access it.

Object.freeze(jsUser["full name"]) //now full name cant be changed.

//adding a function as key value pair
jsUser.greeting = function(){
    console.log(`Hello JS user ${this.name}`)
}

console.log(jsUser.greeting)
console.log(jsUser.greeting())
// why do we get undefined in output in console ?