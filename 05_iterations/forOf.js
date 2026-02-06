// for of 
 const arr = [1,2,3,4,5,6]
 for (const num of arr) {
    console.log(num);
 }

 const greetings = "Hello World!"
 for (const greet of greetings) {
    console.log(greet)
 }

 //Maps // same has key valye pairs, but rememebrs the insertion order of key:value pairs, so any of them can be used as key
 // no duplicate values
 const map = new Map()
 map.set('IN',"India")
 map.set('I',"Iereland")
 map.set('AUS',"Australia")
 console.log(map);

for (const key of map) {
    console.log(key);    
}
for (const [key,value] of map) { //this deconstructs the key value pair
    console.log(key,':-',value);    
}

// OBJECT IS NOT ITERATABLE IN FOR OF ///////////////////////////////////