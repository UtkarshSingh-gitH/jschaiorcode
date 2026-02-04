//check out temporal
let currDate = new Date()
console.log(currDate)
console.log(currDate.toString());

let mydate = new Date(2023, 0, 23, 5, 3)
console.log(mydate.toLocaleString());

//Timestapm
let time = Date.now();
console.log(currDate.getMonth())
console.log(currDate.getMonth())

currDate.toLocaleString('default', {
    weekday: "long",
})