


// function sayMyName(){
//     console.log("v")
//     console.log("a")
//     console.log("m")
//     console.log("s")
//     console.log("i")
// }

//sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2)
// }
// addTwoNumbers(10,20)
// addTwoNumbers(3,null)

// function addTwoNumbers(number1,number2){
//     let result = number1+number2
//     return result
// }

// const result = addTwoNumbers(3,5)
// console.log("Result:",result)

// function loginUserMessage(username ="sam"){
//     if(username === undefined){
//         console.log("please enter a username")
//     }
//     return `${username} just logged in`
// }

// loginUserMessage()
// result = loginUserMessage("vamsi")
// console.log(result)

// function calculateCartPrice(val1,val2,...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,400,500,2000))

// const user ={
//     username:"vamsi",
//     price:200
// }

function handleObject(anyobjet){
    console.log(`username is ${anyobjet.username} and price is ${anyobjet.price}`)
}

//handleObject(user)
// handleObject({
//     username:"sam"
//     price: 399
// })

const myNewArray =[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[0]
}

console.log(returnSecondValue(myNewArray))