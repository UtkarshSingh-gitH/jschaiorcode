const coding = ["js","ruby","java","python","swift"]

// some loops are directly added in properties in ARRAY 

coding.forEach( function (val) { //forEach needs a callback function, now becasuse this is callback fn this does not ahve name
    console.log(val);//as its running inside an array the arguments automatically fetches value
} )

coding.forEach((item) => {
    console.log(item);  
})

//NOW
function printMe (item) {
    console.log(item)
}

coding.forEach(printMe) // just need to give reference of function for it to use
//coding.forEach(printMe()) // lets see, this gives error

coding.forEach((item, index, arr) => {  //foraech has a lot of access not just items/value but more like whole array, index etc
    console.log(item,index,arr);
}) 

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName)
})
