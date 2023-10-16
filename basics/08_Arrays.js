// Arrays


//Shallow copy of an object is a copy whose properties share the same references(point to the same underlying values)

//A Deep copy of an object is a copy whose properties do not share the same references(point to the same underlying values)
// const myArr =[0,1,2,3,4,5,6]
// const myHeros =['shaktiman',"nagaraj"]

// const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[0])

//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(5))
// console.log(myArr.indexOf(5))

// const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)

//slice,splice

// console.log("A ",myArr);
// const myn1 = myArr.slice(1,3)


// console.log(myn1)
// console.log("B ",myArr);

// const myn2 = myArr.splice(1,3)
// console.log("C ",myArr);
// console.log(myn2)

const marvel_heros =["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

const all_new_heros =[...marvel_heros,...dc_heros]  //spread
//console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Vamsi"))   //returns true/false
console.log(Array.from("Vamsi"))       //convert to Array
console.log(Array.isArray(Array.from("Vamsi")))
console.log(Array.from({name:"vamsi"}))  //interesting

let score1 =100
let score2 =200
let score3 =300
console.log(Array.of(score1,score2,score3))    //changeto Array