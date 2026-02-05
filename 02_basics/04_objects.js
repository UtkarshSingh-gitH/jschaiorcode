//const user = new Object() //this is a singleton value 
// this is literal const user = {} 

const user = {}
user.id = "123rd"
user.name = "sam"
user.isLoggedIn = "false"

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c",4:"d"}

const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)

console.log(Object.keys(user)) //this returns an ARRAY as result with all keys in it.
console.log(Object.entries(user)) //this returns an ARRAY as result with all key:value pair in it.
console.log(user.hasOwnProperty('isLoggedIn'))