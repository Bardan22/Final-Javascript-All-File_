// Global variables vs Local Variables 

// Globle variables: Those variables which are openly declared on the global scope or outside of any function or block are known as global variables. Variables defined in global scope can be accessed anywhere within the program.

let x = 1; // it is declared in globale scope

/*
var a = 'apple'
var a = 'banana'
let x = 2; */



// Local variables: Those variables which are declared inside of a function scope or  Block scope are known as local variables. Variables defined in the local scope can be accessed only inside of that particular scope. Local variables takes precendence over globle variables in javascript.

if (true) {
    let y = 9; // it is local variable
    console.log(y) // 9
}

console.log(x) // 1



let x; // variable declaretion
console.log(x)  // undefined
x = 3;
console.log(x) // 3



// Hoisting -> Literal meaning -> to pull up somthing to the top

// Hoisting in Javascript: It is the default behaviour of javascript to raise variables declared with var and function declaretions to the top of the scope where it was defined.

// variable declaretions 

console.log(x) // error with let
let x = 10;


// but
console.log(x) // undefined, with var
var x;


// function declaretion 


func1(1998) // function call is done ahead before function declaretion, still it is working.
function func1(birthYear) {
    console.log(2023 - birthYear)
}


 
// small exercise 

var sport = 'Football'

function func1() {
    let messi = 10;
    if (true) {
        // var ronaldo - due to hoisting
        console.log(messi) // valid
        console.log(ronaldo) // undefined, valid
        var ronaldo = 7;
        let messiInPSG = 30;
        console.log(sport)  // valid
        console.log(ronaldo) // valid, 7
    }
    console.log(messiInPSG)  // not valid
    console.log(messi)  // valid, 10
    console.log(ronaldo)  // valid, 7
    console.log(sport)  // valid, football
}
console.log(messi) // invalid
console.log(messiInPSG) // invalid
console.log(ronaldo) // invalid
console.log(sport) // valid


// Temporal Dead Zone (TDZ):

// TDZ is the region where the variable defined can't be accessed.

if(true) {
    //
    // this region TDZ for x (if declared with let, but var dosen't support TDZ.)
    //
    let x = 3;
    // 
    //
    //
}


// // Why not to use var?
// 1. Var is hoisted
// 2. Variable declared with var can be redeclared again 
// 3. Var is function scoped
// 4. variables defined with var is attached to the window object.  (We'll discuss this in BOM)



// variables - It is a container that stores value or expression. It can't store statement

let x = 9 // 'number'
let fruit = 'apple' // 'string'
// Expression vs Statement

// Expression - it is something that will eventually resolve to a value

let y = 5 + 2 * ( 3 / 1 ) - 2; // it is valid to store expressions, because this expression will resolve to a value.
console.log(y)

// number - operands
// -,+,/, - operators

// expression

// Statement - It is a piece of code that performs certain action

let z = if(true) {     
    console.log('Hello')
}   // we can't store statement. it is not possible to store in variables.


function func1(birthYear) {
   return (2023 - birthYear)
//    console.log(2023 - birthYear)  // it is undefined 
}

let q = func1(1998) // it is valid
console.log(q)