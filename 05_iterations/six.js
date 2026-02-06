const coding = ["js","ruby","java","python","swift"]

//forEach never returns a value

const values = coding.forEach( (item) => {
    return item
} )
console.log(values);

const myNums = [1,2,3,4,5,6,7,89,10]
const newNums = myNums.filter( (num) => num > 4 ) //filter needs a cond, whoever satisfies it gets returned
console.log(newNums)
