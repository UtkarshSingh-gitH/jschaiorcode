//string interpolation 
const name = "Utkarsh" // const name = new Sting('Utkarsh')
const count = 50

//string is not an array type is an Object. (key:value pair)
// in string object you get length property and many other methods whichare dfeined under prototype.
console.log(`Hello my name is ${name} and my hobby count is ${count}`)

const newName = new String('Shivam')
console.log(newName[1])
console.log(name[0])
console.log(newName.__proto__) //to access and print the methods(functions) that prototype provide us.
console.log(newName.charAt(2))

// Some good methods ::::
/*
slice => u can give negative index as well .slice(-8, 4)
trim => removes all the spaces, used in forms etc 
replace => .replace('%20","-")
includes => its gives boolean output
split => used to split a string on basis of some rule, .split(seperator,limit) => .split('-') just one arguments works as well

*/