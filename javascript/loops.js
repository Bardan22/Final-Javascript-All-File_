// There are three major types of loops that are used in most of the programming languages. They are:-
// 1. For Loop
// 2. While Loop
// 3. Do while Loop

// 1. For Loop:
// A for loop is the type of loop which is used to loop when the number of iterations is known in advance.
// Syntax of For loop
// for(initialization: condition: increment/decrement) {
    // block of code to be executed
// }

// Example of for loop to print 'Hello World' 20 times... 

// for (let i = 1; i <= 20; i++) {
//     console.log('Hello World')
// }





// // print the numbers for 1 to 10. 
// for (let i = 1; i <= 10; i++) {
//         console.log(i)
//     }


// print the numbers for 10 to 1. 
// for (let i = 10; i > -1; i--) {
//         console.log(i)
//     }



// Print all the even numbers upto 20 


// for (i=2; i<=20; i++) 
// if(i % 2 === 0) {
//  console.log(i)
// }

// Other ways:

// for(let i=2; i<=20; i+=2) {
//     console.log(i)
// }



// for (let i = 1; i <= 20; i++) 

// if(i%2==0){
//     console.log(i)
// }

// odd number...

// for(let i=1; i<=30; i+=2){
//     console.log(i)
// }



// odd second way...
// for (i=1; i<=20; i+=2){
//     console.log(i)
// }


// Print upto 30
// 1 is odd number because it is not divisible by two
// 2 is even number because it is divisible by two

// .......................
// first way to write....

// for(let i=0; i<=20; i++) 
// if(i===0) {
//     console.log(`${i} is not divisible number.`)
// }
// else if (i%2===0) {
//     console.log(`${i} is Even Number. Because, it is divisible by two.`)
// }
// else {
//     console.log(`${i} is Odd Number. Because it isn't divisible by two.`)
// }

// second way to write....
// it is shorthand...
// for(let i=0; i<=20; i++) {
//     i===0? console.log(`${i} is not a divisible number.`):
//     i%2===0? console.log(`${i} is Even number. because it is divisisble by two.`):
//     console.log(`${i} isn't a odd number. because it is not divisible by two.`)
// }


// third way to write 
// too shorthand....
// for(let i=1; i<=20; i++){
//     let isEven = i%2===0
//     console.log(`${i} is ${isEven? 'Even':'Odd'} Number. Because, it ${isEven? 'is':'isn\'t'} divisible by two.`)
// }








// ................................. 

// for(i=0; i<=30; i++) 



// i%2===0?console.log(`${i} is Even Number. Because, it is divisible by 2.`): console.log(`${i} is odd number. Because, it isn't divisible by 2.`)



// if(i%2===0) {
//     console.log(`${i} is Even Number.`)
// }
// else {
//     console.log(`${i} is odd number`)
// }






    
// 2. While Loop:
// While loop is the type of loop which is used to do iterations when developers don't know the number of iterations beforehand.
// Syntax:

// while(condition) {
    // code to be executed when the condition is true
// }



// let i = 20
// while(2<=i) {
//     console.log(i)
//     i--
// }


// Print numbers from 0 to 4.
// let i = 0
// while(i < 5) {
//     console.log(i)  // 0, 1, 2, 3, 4 ....
//     i++
// }

// Print first 20 even numbers using while loop.

// my code ....

// let i = 2
// while( i < 20) {
//     console.log(i)
//     i+= 2
// }


// ............ 

// other ways:
// using if statement...
// let i = 1
// while(i <= 20) {
// if(i%2===0) {
//     console.log(i)
// }
// i++
// }


// other way:
// using short circuiting
// let i = 1
// while(i<=20) {
//     i%2===0 && console.log(i)
//     i++
// }



// other way:
// using ternary operator:
// let i = 1
// while(i<=20) {
//     i%2===0 ? console.log(i) : console.log()
//     i++
// }



// other way:
// shorthand...
// let i = 2
// while(i <= 20) {
//     console.log(i)
//     i += 2
// }


// Print first 20 odd numbers using while loop

// let j = 1
// while(j <= 20) {
//     console.log(j)
//     j+=2
// }


// infinite while loop:
// while(true) {
//     // statement here will be executed...
// }

// eg: 

// let i = 1
// while(i <= 5) {
//     console.log(i)
// }


// inifinite for loop:
// for(let i = 0; i >= 0; i++) {
//     console.log(i)
// }


// using while loop print
//  1 is odd because it is divisible by two 
//  2 is Even because it isn't divisible by two 

// let i = 1
// while(i<=20){
//         let isEven = i%2===0
//         console.log(`${i} is ${isEven? 'Even':'Odd'} Number. Because, it ${isEven? 'is':'isn\'t'} divisible by two.`)
//         i++
//     }





    // print the sum of numbers from 1 to 100 using while loop. 

// let i = 1
// let sum = 0
// while(i <= 100) {
//     sum += i  // sum = sum + 1
//     i++  // i = 5
// }
// console.log(sum)



// 3. Do while Loop:

// It is the type of loop which is similar to while loop but it executes the code 1 time before checking the condition.

// syntax :
// do {
    // code to be execute
// } while (condition)

// Print number from 0 to 4
// let i = 0
// do {
//     console.log(i)
//     i++
// } while (i < 5)

// output:
// 0
// 1
// 2
// 3
// 4



let i = 6
// in while loop...
while(i < 5) {
    console.log(i)
    i++
}
// output:
// answer will be 'nothing'...

// in do while loop...
do{
    console.log(i)
    i++
} while (i < 5)
// 6



// WAP that calculates the sum of numbers enterd by the user until user enter 0.
// 5
// 7
// 3
// 0
// answer is in doWhile.html

