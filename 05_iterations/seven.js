const myNums = [1,2,3,4,5,6,7,8,9,10]

let newNums = myNums.map( (num) => num+10 ) //self returns // but it returns all not in filters automatically
console.log(newNums)

newNums = myNums
                .map( (nums) => nums*10 )
                .map( (num) => num+1 )
console.log(newNums)





// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )