//Types of Data types based on Data Storing(memory) and Accessing data

// Primitive :-

//7 type : String,Number,Boolean,null,undefined,Symbol,BigInt


// const score = 100
// const scoreValue =100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id ==anotherId)

// const bigNumber = 35454878784515n



// //Reference (Non primitive)

// //Array,Objects,Functions

// const heros =["shaktiman","naagraj","dooga"]
// let myObj = {
//     name: "vamsi",
//     age:22,
// }
// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);    

// ++++++++++++++++++++++++++++++++++++
//Stack(primitive)

//Heap (Non-primitive)

let myName ="vamsi"
let names = myName

names = "chai our code"
console.log(names);
console.log(myName)


let user ={
    email:"vamsi@gmail.com",
    upi:"user1"
}

let usertwo = user
usertwo.email ="vamsi@gmail.com"
console.log(user.email)
console.log(usertwo.email)