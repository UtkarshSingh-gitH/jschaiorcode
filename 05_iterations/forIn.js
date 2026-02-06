//forin loop are for objects mostly
const myObject = {
    js: 'javascript',
    cpp: 'c plus plus',
    rb: 'rubby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    console.log(key);
    console.log(myObject[key])  
}

// forof loops directly prints the value 
// for in loop prints the key by default
const programming = ["js", "cpp","rust","rubby"]
for (const key in programming) {
    console.log(key)
    console.log(programming[key])
}

//this cant do itteration on maps

//No, destructuring like [key, value] works only with for...of because it iterates over iterable values.
//for...in iterates over object property names, so it cannot be used with Map entries.