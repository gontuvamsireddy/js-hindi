// Object can be Declared in two Ways


//Singleton

//Object.create
//Object Literals


// const mySym =Symbol("key1")


// const JsUser ={
//     name: "vamsi",
//     "full name":"vamsi krishna reddy",
//     [mySym] :"mykey1",
//     age: 22,
//     location:"Giddalur",
//     email:"vamsi@gmail.com",
//     isLoggedIn :false,
//     lastLoginDays :["Monday","saturday"]
// }

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser.mySym)
// console.log(JsUser[mySym])

// JsUser.email = "vamsi@chatgpt.com"
//Object.freeze(JsUser)
// JsUser.email = "vamsi@ms.com"
// console.log(JsUser)

// JsUser.greeting = function(){
//     console.log("Hello Js user")
// }

// JsUser.greetingTwo = function(){
//     console.log(`Hello Js user,${this.name}`)
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

const tinderUser = new Object()

 //const tinderUser ={}

 tinderUser.id ="123abc"
 tinderUser.name ="sammy"
  tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userfullname :{
            firstname :"hithesh",
            lastname :"choudhary"

        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname)

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}
const obj4 ={5:"a",6:"b"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 ={...obj1, ...obj2} //spread
// console.log(obj3);

const users = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'))

 const course ={
    coursename :"js in hindi",
    price:"999",
    courseInstructor: "hithesh"
 }

 //course.courseInstructor
const {courseInstructor :instructor} = course
//console.log(courseInstructor)
console.log(instructor);

const navbar =({company})=> {

}

navbar(company = "hithesh")
//   ================APIS===================
// {
//     "name" :"hithesh",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

[
    {},
    {},
    {}
]