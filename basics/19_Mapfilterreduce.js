//const coding =["js","rubby","java","python","cpp"]


// const values = coding.forEach((item) =>{
//     //console.log(item);
//     return item
// })

// console.log(values);

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums  = myNums.filter((num)=> num>4)
// console.log(newNums);

const newNums = []
// mynums.forEach((num) =>{

//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

//Filter

let userBooks = books.filter((bk) => bk.genre === 'History')
userBooks = books.filter((bk) => {
    return bk.publish >=2000
})
console.log(userBooks);

const myNumbers = [1,2,3,4,5,6,7,8,9]

//const newNums  = myNumbers.map((num)=> num+10)

const newNums = myNumbers
                    .map((num) => num*10)
                    .map((num) => num+1)
                    .filter((num) => num >=40)
console.log(newNums)

const myNums = [1,2,3]
// const myTotal = myNums.reduce(function(acc,currval)){
//     console.log(`acc:${acc} and currval :${currval}`);
//     return acc +currval
// },3)

// console.log(myTotal)

const myTotal = myNums.reduce((acc,curr)  => aacc+curr,0)

cconsole.log(myTotal);

//map,filter,reduce