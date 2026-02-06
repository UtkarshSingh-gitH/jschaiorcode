// Immediately Invoked Function Expressions (IIFE)
// to write a function which can be invoked turrant
//eg -> a file which has database connecton, so you want it to be up and running immedietly, as the app starts.
(function chai(){ //this is named iife
    console.log("DB CONNECTED")
})(); //made and called here itself, see how function is in () hence () => () no retrun required 
// so we do this to seperate this function from the global scope pollution

//the context for IIFE dosent know where to end hence we have to give ;
( () => {
    console.log("simple iife")
})()