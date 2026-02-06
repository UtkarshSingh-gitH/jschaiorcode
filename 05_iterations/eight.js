//reduce
// you define a variable and then you pass it in accumulator, so in first iteration we have accumulator and then we 
// add current value to it, and it goes on // cart system 

const array1 = [1,2,3,4,5,6,7,8,9,10]

const initailValue = 0
/*
const total = array1.reduce( (acc, curval) => {
    console.log(`acc: ${acc} and curval: ${curval}`);
    return acc + curval
}, 0)
*/

const total = array1.reduce( (acc,curval) => (acc+curval),initailValue)
console.log(total)