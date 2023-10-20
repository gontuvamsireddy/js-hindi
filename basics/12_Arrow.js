const user ={
    username : "hithesh",
    price :999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`)
        console.log(this)
    }

}

// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "hithesh"
//     console.log(this.username);
// }
// chai()

const chai = ()=>{
    let username = "hithesh"
    console.log(this.username);
}
chai()

// const addTwo =(num1,num2) =>{
//     return num1+num2
// }
// console.log(addTwo(3,4))

const addTwo =(num1,num2) =>({username: "hithesh"})

console.log(addTwo(3,4))