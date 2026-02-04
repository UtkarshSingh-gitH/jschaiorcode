//arrays
const myArr = [0,1,2,3,4,5] //we can have hetrogenous array in js
// array in JS are resizable, you can add more values.
//arrays in js make SHALLOW COPIES, both the original array and the copy array share the same reference point.

const myArr2 = new Array(1,2,3,4,5,6)
console.log(myArr[3])
console.log(myArr2[0])

//Array Methods
myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr) // dosent need loop to print all values
console.log(myArr[5])
myArr.unshift("start")
console.log(myArr)
myArr.shift("start")
console.log(myArr)

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);

console.log("A ", myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B ", myArr);
const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log("C ", myArr)




