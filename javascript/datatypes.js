// Datatypes: In Javascript, a datatype refers to the type of value that a variable can hold.

//Javascript is dynamically typed programming language, it means that value of variable can change at runtime.

// C - Programming (Statically typed programming language)

// int x = 9;
// x = 'hello'  // not possible

// Javascript (Dynamically typed programming language)  -> Typescript (statically typed)
// let x = 9 
// x = 'hello'  // it is possible 

// In Javascript, there are two major classification of datatypes.
//1. Primitive Datatypes
//2. Non-Primitive Datatypes or Reference Datatypes

//1. Primitive Datatypes
//a. Number (-2.14B to +2.14B) -> It is used for integers and decimals.
// eg:- 
let num1 = 9
let num2 = 17.74389

console.log(typeof (num1))  // Number

let num3 = 100
let num4 = 100
console.log(num3 === num4)  // true

//b. String -> It is used for texts, characters, sentences

let firstName = 'Bardan'
let lastName = "Bardan"
let address = `khudikhola`
let zipCode = '3370'

console.log(typeof (zipCode))  // string 

// c. Boolean -> use for taking decision and logical type

let isHoliday = false
let isNepali = true

// d. Undefined  -> When a variable is declared but its value is not assigned

let age;
console.log(typeof (age)) // undefined
let x = undefined // it is possible to assign undefined as a value
// e. Null -> to represent state of nothings / empty value
let y = null 

// f. Symbol (ES2015)  -> Symbol is a datatype that makes every value unique even if it seem to be exactly same.

let year1 = Symbol(2023)
let year2 = Symbol(2023)

console.log(year1 === year2) // false

// g. BigInt (ES2020) -> It is used for storing large numbers

let largeNum = 100n
let num5 = 100
console.log(num5 === largeNum) // false

console.log(typeof (largeNum))

//2. Non-Primitive Datatypes or Reference Datatypes
// a. Array
// b. Object

// a. Array:-
let daysInAWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday']  // this method is useful
console.log(daysInAWeek)

let arr1f = ['string', 99, true, false, undefined, null, Symbol(1), 199n, ['apple', 99], {a: 1, b: 2}]  // It is possible to store like this but we don't use this method to store value in array.

// varableType identifier = [el1, el2, el3,.....elN]

// b. Object:-

let persion1 = {
    firstName: 'Ram',
    middleName: 'Bahadur',
    lastName: 'Thapa',
    age: 27,
    isMarried: true 
}
console.log(persion1)

// Syntax:
// let identifier = {
    // key1: value1,
    // key2: value2
// }

// Javascript is object-oriented language. it means everything is based on object.

// javascript is multi paradigm programming language
// We can follow POP or FP or OOP to program. POP, FP and OOP are the partten to write a program.
// POP => Procedural Oriented Programming 
// OOP => Object Oriented Programming
// FP => Functional programming


let grade = 9
let oldGrade = grade
grade = 10

console.log(grade)  // 10
console.log(oldGrade)  // 9

// drawing here in copy............
// call stack and heap

let arr1 = [1, 2, 3, 4]
let arr2 = arr1    // It is not copying the actual value rather it is copy the reference address of heap
arr2.push(5) // [1, 2, 3, 4, 5]


let arr1 = [1, 2, 3, 4]
let arr2 = [...arr1]  // it is spread operator
arr2.push(5) 

console.log(arr1)  // [1, 2, 3, 4, 5]
console.log(arr2)  // [1, 2, 3, 4, 5]



// Non primitive datatypes can't be stored in call stack, it is stored in heap

// Objects are stored in heap.

// spread operator 

// why non-primitive datatypes are called reference datatypes and how it behaves ?