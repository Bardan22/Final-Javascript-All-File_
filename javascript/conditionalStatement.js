// If Else Statement: It is a conditional statement in javascript that allows to execute a block of code based on the condition. Block of if statement will execute when the condition is true and block of else statement will execute when the condition of if statement is false. 

// Syntax 

// if(condition){
    // Statement to executed if the condition is true....
// }
// else{
    // statement to execute if the condition is false....
// }


// WAP to check if the user is eligible to vote...
// let age = 17

// // condition always accepts boolean (true and false) to check condition statement...

// // 17 >= 18 -> false
// if(age >= 18) {
//     console.log(`You are eligible to vote.`)
// }
// else {
//     console.log(`You are not eligible to vote.`)
// }


// if else if else

// Syntax:

// if(condition) {
//     // Statement to executed if the condition is true...
// }
// else if(codition) {
//     // Statement to executed if the condition is true of else if block...
// }
// else {
//     // if all the above statement are false then else block will be executed...
// }

// WAP to identifier which one is greater number.

let x = 9
let y = 11

// 9 > 11 -> false....
if(x < y) {
    console.log(`${x} is greaeter than ${y}`)
}
// 11 > 9 -> True....
else if(y > x) {
    console.log(`${y} is greater than ${x}.`)
}
else {
    console.log(`Both ${x} and ${y} are equal numbers.`)
}

// ... ..

// Truthy vs Falsy Values
// In javascript, during the condition check, false, 0, -0, 0n, -0n, undefined, null, NaN, (empty string) '' these values are considered to be falsy values.

// except these falsy values all the values in javascript are truthy values.

// if() {
//     console.log('This is executed because there is truthy value in condition check')
// }
// else {
//     console.log('This is executed because there is falsy value in condition check')
// }


// Switch Case:

// Syntax

/* switch (value) {
    case value1:
        // statement to be executed if case is value 1
        break;
    case value2:
        // statement to be executed if case is value 2
        break;
    case valueN:
        // statement to be executed if case is value N
        break;
    default:
        // statement to be executed if non of the cases matches 
} */


// example:

// let color = "yellow"

// switch (color) {
//     case 'red':
//         console.log('STOP')
//     break;
//     case 'yellow':
//         console.log('BE READY')
//     break;
//     case 'green':
//         console.log('GO')
//     break;
//     case 'blue':
//         console.log('BLUE IS NOT A TRAFFIC LIGHTS COLOR')
//     break;
//     default:
//         console.log('Invalid Color')
// }
// //console.log(color)





const totalmarks = 4
let obtMarks = 1.6
let percentage = (obtMarks / totalmarks) * 100
console.log(percentage)

switch (true) {
    case percentage >= 90:
        console.log('A+')
        break;
    case percentage >= 80:
        console.log('A')
        break;
    case percentage >= 70:
        console.log('B+')
        break;
    case percentage >= 60:
        console.log('B')
        break;
    case percentage >= 50:
        console.log('C+')
        break;
    case percentage >= 40:
        console.log('C')
        break;
    case percentage >= 30:
        console.log('D+')
        break;
    case percentage >= 20:
        console.log('D')
        break;
    default:
        console.log('E')

}


// conditionalStatement