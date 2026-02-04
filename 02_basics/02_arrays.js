// use cancat function to add to arrays
//push, adds in the same array 
//concat adds 2 arrays and makes a third one

//but we use SPREAD
let marArr = ["dr_strange", "thor", "hulk"]
let dcArr = ["batman", "deathstroke","raven"]

const allHeros = [...marArr, ...dcArr] //... converts the aaray into indivudual values
console.log(allHeros)

const otherArr = [1,2,3,4,[5,6,7],8,9,[0,11,12,13],76,57]
const anotherArr = otherArr.flat(Infinity)
console.log(anotherArr)

console.log(Array.isArray("Utkarsh"))
console.log(Array.from("Utkarsh")) //similarly you ahve "of"

//but for objects we need to mentions if we need array of keys or values