//for of loop

//["","",""]
//[{},{},{}]
//for of loop can be used for arrays,maps and strings
const arr = [1,2,3,4,5]

for(const num of arr){
    console.log(num);
}

//Maps - Collection  of key and values

const map = new Map()
map.set(`IN`,"India")
map.set(`USA`,"United statesof America")
map.set(`IN`,"India")
console.log(map)

for(const [key,value] of map){
    console.log(key,':-',value);
}


// for in loop can be used for Objects
const myObject ={
    js :'javascript',
    cpp:'c++',
    rb:"rubby"
}

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming =["js","python","py"]

for(const key in programming){
    console.log(programming[key]);
}