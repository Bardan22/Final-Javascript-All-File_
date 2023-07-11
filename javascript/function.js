// Function:-
// A Function is basically a block of code that can execute a specific task. The value or action performed by a function can be achieved when we call or invoke a function. A function consist of a function name (to write function names we have to follow the rules of writing identifiers). A function contains a paranthesis where parameters can be contained.


// In Javascript, There are three ways to declare a function in javascript
// They are:-
// 1. Function Declaration
// Syntax:
// function functionName() {
//     // code to be executed
// }

// for eg. Create a function that says "Hello World"

// // defining a function 
// function greeting() {
//     console.log("Hello World")
// }
// // calling a function 
// greeting()

// // Parameterized function
// // Syntax:
// function sayHello(name) {
//     console.log(`Hello ${name}`)
// }
// sayHello('Bardan')
// sayHello('Syam')
// sayHello('Hari')

// Create a function that calculates your age 


// function calcAge(birthYear) {
//     const thisYear = 2023
//     const age = thisYear - birthYear
//     // console.log(`You are ${age} years old`)
//     return `You are ${age} years old` 
// }
// // When there is no 'return' keyword in the function it will return undefined...

// // console.log(calcAge(1997))   // it will be execute with return keyword...
// // document.write(calcAge(2002))
// const ourAge = calcAge(2005)
// console.log(ourAge)
// // document.write(ourAge)
// calcAge(1997)
// calcAge(1980)
// calcAge(2005)
// calcAge(2001)


// Hello Ram, You are 18 years old
// DRY Principle
// Don't Repeat Yourself

// function calcAgeWithName(name, birthYear) {
//     const thisYear = 2023
//     const age = thisYear - birthYear
//     console.log(`Hello ${name} You are ${age} years old`)
// }

// calcAgeWithName('Ram', 2000)
// calcAgeWithName('Gita', 2009)
// calcAgeWithName('Sita', 1997)
// calcAgeWithName('Hari', 1994)

// // if there is no function we need to write code as below:

// let ramBirthyear = 2000
// let gitaBirthyear = 2009
// let sitaBirthyear = 1997
// let hariBirthyear = 1994

// let ramFirstName = 'Ram'
// let gitaFirstName = 'Gita'
// let sitaFirstName = 'Sita'
// let hariFirstName = 'Hari'


// console.log(`Hello, ${ramFirstName}, you are ${2023 - ramBirthyear} years old`)
// console.log(`Hello, ${gitaFirstName}, you are ${2023 - gitaBirthyear} years old`)
// console.log(`Hello, ${sitaFirstName}, you are ${2023 - sitaBirthyear} years old`)
// console.log(`Hello, ${hariFirstName}, you are ${2023 - hariBirthyear} years old`)




// Write a functon to add two number 

// function sum(num1, num2) {
//     // console.log(num1 + num2)
//     return num1 + num2
// }

// // sum(2, 3)
// let sub = sum(2, 3)
// console.log(sub)



// Function Declaration are Hoisted. for eg:-

// sum(2, 8)  // it will works...
// function sum(num1, num2) {
//     console.log(num1 + num2)
//     // return num1 + num2
// }





// 2. Function Expression:

// variableType functionName = (assignment operator) function() {
    // code to be executed
// }

// function Declaration is converting into function Expression...
// function greetings() {
//     //     console.log("Hello World")
//     }

// eg.

// let greetings = function() {
//     // console.log(`Hello World`)
//     return `Hello World`
// }
// // greetings()
// let x = greetings()  // Hello World


// parameterized:
// let sum = function(a, b) {
//     console.log(a + b)
//     // return a + b
// }

// sum(10, 30)


// Hoisting...only Variable hoisted when it Declared from the var, but actull value never hoisted...

// var sum;  
// sum(10, 30)  // Error  // not possible to call variable, only function can be possible to call...
// console.log(sum)  // undefined
// var sum = function(a, b) {
//     console.log(a + b)
//     // return a + b
// }
// sum(10, 30)


// var x;
// console.log(x)  // undefined

// var x = 10
// console.log(x)  // 10




// function x() {
//     return {a: 1, b: 2}
// }
// console.log(x())  // {a: 1, b: 2}



// function y() {
//     return {
//        a: 1, 
//        b: 2
//        }
// }
// console.log(y())  // a: 1 


// function z() {
//     return 
//     {a: 1, b: 2}
// }
// console.log(z())  // undefined


// ===================================> 

// 3. Arrow Function (ES6+)
// It is shorthand way to create a function.

// syntax:
// variable_type functionName = () => {

// }

// with Curly bracket 

// const greetings = () => {
//         console.log("Hello World")
//     }

// greetings()

// // without curly bracket

// const greetings = () => console.log("Hello World")   //undefined...

// greetings()

// // Parameterized Arrow Function...
// const greetWithName = (name) => console.log(`Hello ${name}`)

// greetWithName(Ram)
// greetWithName(Hari)
// greetWithName(Sita)



// // Arrow function supports KISS Principle....
// const calcAgeWithName = (name, birthYear) => {
//     const thisYear = 2023
//     const age = thisYear - birthYear
//     console.log(`Hello ${name}, Your're ${age} years old`)
// }

// Using Ternary Operator....

// const calcAgeWithName = (name, birthYear) => console.log(`Hello ${name}, Your're ${2023 - birthYear} years old`)

// calcAgeWithName('Ram', 2000)
// calcAgeWithName('Sita', 2003)


// Create and arrow function that returns the sum of two numbers.
// my code.../////

// const sum1 = (num3, num4) => num3 + num4


// using return keyword.......
// const sum = (num1, num2) => {
    //     let add = num1 + num2
    //     return add 
    // }
    
    
    // // short, without using return keyword...
    // const sum = (num5, num6) => num5 + num6
    
    // let returnVal = sum1(2, 5)
    // console.log(returnVal)  // 7...
    
    // or

// let x = sum(1, 2)   // 3
// let product = x * 3  // 9
// console.log(product)



// Create a function that takes a  number and returns true if the number is even and return false if the number is odd.

// function declaration:-
function evenOdd(num) {
    return num % 2 === 0
}

let x = evenOdd(10)
console.log(x)






// function Expression:-
// const oddEven = function(num) {
//             if(num % 2 === 0) {
//             // return `Even Number`
//             return `True`
//         }
//         else {
//             // return `Odd Number`
//             return `False`
//         }
// }
// let a = oddEven(12)
// console.log(a)





// Arrow function:-

// const isEven = num => num % 2 === 0
// // {
// //     if(num % 2 === 0) {
// //         return `True`
// //     }
// //     else {
// //         return `False`
// //     }
// // }

// let x = isEven(121)
// console.log(x)






// Create a function to check when were you 16 years old 

// 14 -> you'll be 16 in 2 year
// 19 -> you were 16, 3 years ago 
// 16 -> you're sweet 16.


// const checkAge = age => {
//     if (age > 16) {
//         return `You were 16, ${age - 16} years ago.`
//     } else if(age < 16) {
//         return `You'll be 16 in ${16 - age} years.`
//     } else {
//         return `You're sweet 16.`
//     }
// }

//                 console.log(checkAge(5))
                

    // Using Ternary operator:
                
//      const checkAge = age => age < 16 ? `you'll be 16 in ${16 - age} year` : age > 16 ? `you were 16, ${age - 16} years ago` : `you're sweet 16.`
                
//   console.log(checkAge(18))



//   coding challange 2 -> function
//   coding challange 3 -> function
//   Master js class open or close -> function






                // My Questions:-
                // only arrow function supports Ternary Operator?