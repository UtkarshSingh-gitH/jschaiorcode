const user = {
    username: "utkarsh",
    price: "99",
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`) //current context
    }
}

//but what is the current context of THIS here.
user.welcomeMessage()
user.username = "gargi"
user.welcomeMessage()

console.log(this) //this comes out to be empty => {} , in the node environment
//but on browser this print => Window{}, hence the global object in browser is window object
// {} => object, () => function, [] => array

function one(){
    let username = "Utkarsh"
    console.log(this.username); // but thid will print UNDEFINED, this context only works for
    console.log(this); // but thid will print UNDEFINED, this context only works for
}                               // objects not functions
one() // here we get a lot of values of THIS

/*--------------------------------ARROW FUNCTION--------------------------------------*/
/* 
const two = function() {
    let username = "Utkarsh"
    console.log(this.username);
}
BUT
*/

const two = () => {
    let username = "Utkarsh"
    console.log(this); // how we ahve a lot of functions values in THIS when we define it in
}  // a normal function, but in arrow function it comes out as {} empty
   // how it was when we tried ti print {} in global scope //5:42:07

// const addTwo = (num1,num2) => {
//     return num1+num2
// } basic arrow function 

const addTwo = (num1,num2) => /* return */ num1+num2 //assumimg braces not needed
// we can write it like (num1+num2) as well, if we use {} we need RETURN keyword
console.log(addTwo)

//conclusion 
//(function () {} )
//(() => {})
//(() => ())

