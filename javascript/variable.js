/* Variables are very important programming concept. 
it allows us to to store and manipulate various types of values. 
for eg: strings, number, arrays, objects, etc. */

/*  There are 3 ways to declare a variable in javascript. They are:
1. Var (Pre ES6)
2. Let (ES6+)
3. Const (ES6+)

NOTE:  Since, Javascript is an high level programming language.

syntax to declare variables:

variableType variableName (identifier) = value

for eg:
let x = 5;

There are certain set of rules to write an identifier in javascript:
1. Identifier must always start with (A-Z or a-z) or_or $.
2. It can't be start using number or other special character.

let Apple = 'fruit'

3. The identifiers are case sensitive. It means x and X are two different variableName.

let fruit = "apple"
let Fruit = 'apple'

4. We can't use reserved keywords. for eg: if, else, for, while, etc are reserve keywords which can't be use for variableNames.

let while = 5

standard convention for writing variabales
To declare a variableName (identifier) camelcase is used.

let firstName = "Ram"

let myNameIs 

there are other different cases are well 
pascal case - let Persion
$snake_case
kebab-case


The identifier must descriptive and relevant to what kind of value is stored.

let x = 'Ram shah'
let fullName = 'Ram Shah'


*/

// Var vs Let vs Const

// Var
//1. var is used to declare variables which values can be changed overtime throughout the program

// var y = 10
// y = 5

// var x; // variable declaretion
// x = 4; // value assign or value initialization
// x = 7; // value re-assign

//2. Redeclaretion of variable is possible in var which is very problematic

// var firstName = "Ram" // somthing important

// var firstName = "Shyam" // somthing not really important

// 3. var is function scoped

//let
//1. let is used to declare variables which values can be changed overtime throughout the program

// let z = 3
// z = 1

//2. Redeclaretion of variable is not possible in let which is a good thing

// let lastName = "shah"

// let lastName = "Tamang"

// 3. let is block scoped

// const
//1. It is used to declare constant variable. It means the value stored in the variable declared with const shouldn't and can't be changed overtime throughout the program. Variable declaretion only is not possible in const.

// const PI = 3.14

// PI = 4 // It is not valid to re-assign value in constant variables

//(TypeError: Assignment to constant variables)

//2. Redeclaretion is not possible in const

// const PI = 3.14

// const PI = 2

// 3. const is block scoped

// Function scope vs Block scope
// scope is the region between inside the curly braces.

// if the scope is of function it is function scope

let a = 10; // it is globle scope

function x() {
  //
  // function scope
  //
}

if (true) {
  //
  // block scope
  //
}

////////////////////////////////////////////////

function x() {
  var address = "pokhara";
  console.log(address); // it is valid in block scope
}
console.log(address); // but it is not valid outside of function scope

if (true) {
  let gender = "male"; // when we use of let for declaretion it is not accessed outsode.
  var gender = "male"; // when we use of var for declaretion it will be accessed outsode.
}
console.log(gender); // it is not accessed here.

/////////////////////////////////////////////////

function x() {
  var a = 1;
  if (true) {
    let b = 2;
    console.log(a); // it can be accessed // valid
  }
  console.log(d); // valid
  console.log(b); // invalid
  let c = 3;
}
console.log(a); // not valid
console.log(b); // not valid
console.log(c); // not valid
console.log(d); // not valid
