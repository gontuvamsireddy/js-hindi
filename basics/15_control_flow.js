//if
const isuserloggedIn = true

if(isuserloggedIn){
    
}

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power:${power}`)



const balance = 1000
//if(balance > 500)  console.log("test"),console.log("test2");

if(balance > 500){
    console.log("less than 500");
}
else if(balance < 750){
    console.log("less than 750")
}
else{
    console.log("less than 1200")
}

//switch statement

/*
switch(key){
    case value:
        break;
    default:
        break;
}
*/

const month =3

switch(month){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
            
    case 3:
        console.log("march");
        break;

    default:
        console.log("month case ");
        break;
}

// truth or false

const userEmail =[]

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Dont have user email")
}

//flasy values
//false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy values
// "0",'false',"",[],{},function(){}

//objects
const emptyObj = {}

if(Object.keys(emptyObj).length ===0){
    console.log("Object is empty");
}

// false == 0  o/p:-true
// false == '  o/p:-true
// '' == 0  o/p:-true

// Nullish coalescing operator (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
// val1 = undefined ?? 15

console.log(val1);

//Terniary operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice >=80 ? console.log("less than 80") : console.log("more than 80");