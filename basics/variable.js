const accountId = 144553
let accountEmail ="vamsi36560@gmail.com"
var accountPassword ="12345"
accountCity ="jaipur"
let accountState;

//accountId = 2 //not allowed



accountEmail ="vamsi@"
accountPassword ="2656"
accountCity ="Bengaluru"

console.log(accountId)

/*

prefer not to use var
because of issue in block scope and functional scope


Var
variables are globally scoped or function scoped. They can be reassigned and redeclared within their scope.

Let
variables are block scoped. They can be reassigned but not redeclared within their scope.

Const
variables are block scoped and cannot be reassigned or redeclared. They must be initialized when they are declared.

*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])