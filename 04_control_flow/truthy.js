const usermail = "some@mail.com"

if (usermail) {
    console.log("Got uer mail");
} else {
    console.log("Dont have a mail")
}

// so if we pass these values they are falsy values
// false, 0, -0, 0n(bigInt), "", null, undefined, NaN
//except this all are positive value
// true, "0", "false", " ", [], {}, function(){}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) { //here Object.keys return a array and we check if array length is empty or not
    console.log("object is empty");
}

// false == 0 => true
// false == '' => true
// 0 == '' => true

// Nullish coalescing Operator (??): /*we have only 2 values*/ null undefined
let val1;
val1 = 5 ?? 10
console.log(val1);
val1 = null ?? 10
console.log(val1);
val1 = undefined ?? 15
console.log(val1);
val1 = undefined ?? "NULL"
console.log(val1);
val1 = undefined ?? "NULL" ?? 40
console.log(val1);
// if we fetch data from database or something and it comes out to NULL or undefined this ?? operator is used to handle it there 
// so the further codes keep working,modtly the second value is a function call or another api call or maybe we can call a string
//so the code continues

// Terninary Operator 
/*  condition ? true : false */
const price = 100
price >= 80 ? console.log("less that 80") : console.log("more that 80")