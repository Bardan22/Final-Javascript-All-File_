// Operators: Operators are symbols that performs specific actions or operations on the values or operands.

// Expression -> Combination of Operands Operators Operands 

// eg x = 5 + 3 , this is an expression

// Types of Operators in Javascript: 
// Arthimetic Operators:
// let num1 = 20
// let num2 = 10
// // 1. Addition Operators (+)
// let sum = num1 + num2  //30
// // 2. Substraction Operators (-)
// let diff = num1 - num2  //10
// // 3. Multiplication Operators (*)
// let product = num1 * num2  //200
// // 4. Division Operators (/)
// let div = num1 / num2 // 2
// // 5. Modulo Operators (%)
// let remainder = num1 % num2 // 0
// // console.log(5 % 2)  // 1
// // 6. Exponential Operators (**)
// let power = num1 ** num2  // 20 ^ 10


// Concat Operator (+)

// Incase of string as a operands the + sign will act as concat operator.

// let x = "Ram"
// let y = 10
// console.log(x +" "+ y)  // Ram10

// let x = "10"
// let y = "50"
// console.log(x + y)  // 1050, because it is string

// let x = "10"   // js convert into number it.
// let y = "50"   // js convert into number it.
// console.log(x + y)  // -40 


// let x = "Ram"   // js convert into number it.
// let y = "50"   // js convert into number it.
// console.log(x - y)  // NaN 

// let x = "Ram40"   // js convert into number it.
// let y = "50"   // js convert into number it.
// console.log(x - y)  // NaN 

// let x = false   // 0, 1
// let y = "50"   // js convert into number it.
// console.log(x - y)  // NaN 



// Type Coercion and Type Conversion:
// Type Coercion:
//  Type Coercion is a default behaviour of javascript that forcefully converts one datatype to another datatype to successfully execute the operation.

// For eg:
// console.log("Ram" + 10)  // "Ram10" (as a string)
// console.log("100" / "50")  // 2 (as a number)

// Type Coercion and Type Conversion only below datatype:
// String 
// Number
// Boolean


// console.log("12232eh" + 2)  // 12232eh2
// console.log("12232eh" / 2)  // NaN
// console.log("12232eh" * 2)  // NaN
// console.log("12232eh" % 2)  // NaN
// console.log("12232eh" ** 2)  // NaN

// NaN + "90" // "NaN90"

// Type Conversion: 
// Type Conversion is the process of converting one datatype to another datatype as per developers will or requirement. 

// parseInt
// parseFloat
// Number
// +



// Relational (Comparison) Operators
// This operator always returns boolean value based on the comparison.

// // greater than equals to (>=)
// console.log(10 >= 8)  // true
// console.log(10 >= 11)  // false
// console.log(10 >= 10)  // true

// less than equals to (<=)
// console.log(7 <= 9)  // true
// console.log(5 <= 3)  // false
// console.log(3 <= 3)  // true

// // greater then (>)
// console.log(10 > 20) // false
// console.log(10 > 10) // true
// console.log(10 > 7) // false



// // less than (<)
// console.log(9 < 2) // false
// console.log(9 < 12) // true
// console.log(9 < 9) // false


// equals to (loose) (==): 
// : it checks if the values are same or not
// console.log(10 == 10) // true
// console.log(10 == 9)  // false
// console.log(10 == 11) // false
// console.log(10 == '10') //true
// console.log(10 == '9') //false 


// equals to (strict) (===):
// : it checks if both the value and datatype are same.

// console.log(10 === 10) //true
// console.log(10 === 9) // false
// console.log(10 === 11) // false
// console.log(10 === '10') // false




// Assignment Operators
// This operator assign the value to the variable

// = (assignment operator)
// let x = 10 // here, 10 is assigned to variable named as x

// // += (addition assignment)
// x += 3 // x = x + 3 

// // -= (substraction assignment)
// x -= 4 // x = x - 4

// // /= (division assignment)
// x /= 3 // x = x * 2

// // *= (multiplication assignment)
// x *= 2 // x = x * 2

// // %= (modulo assignment)
// x %= 3  // x = x % 3

// // **= (exponential assignment)
// x **= 2 // x = x ** 2

// VVIR , = vs == vs === 


// Logical Operators
// Logical Operators are those operators which is used to combine boolean values and manipulate them.


// AND Operator (&&)
// In 'AND' Operator, if all the values are true then only the final value or output will be true.
// The output or final value will be false if one of the value is false.
// eg:
// console.log(true && true && true)  //true....
// console.log(true && true && true && false && true && true)  //false....

// let age = 18   // this value is getting from users...
// let gender = 'Male'   // this value is getting from users...

// // If you're 18 or older you can enter the club. If you're a female you'll get a free drink.

// // 18 >= 18 && 'Male' === 'Female'
// // true && false
// // false

// if(age >= 18 && gender === 'Female') {
//     console.log(`Congratulation, You can enter the club and get a FREE DRINK.`)
// }

// // 18 >= 18 && 'Male' === 'male'
// // true && true
// // true

// else if(age >= 18 && gender === 'Male'){
//     console.log(`Congratulation, You can enter the club..`)
// }
// else {
//     console.log(`Sorry, You can't enter the club.`)
// }



// OR Operator (||)
// In 'OR' Operator, if one of the value is true, then the final value or output will be true.
// The output will be false if all of the values are false.

// console.log(true || true || false || true)  // true
// console.log(false || false || false || true)  // true
// console.log(false || false || false || false)  // false


// You can enter the club IF you're 18 or older or You own the club.

// let age = 22
// let isOwner = false

// 22 >= 18 || false
// true || false
// true

// let age = 11
// let isOwner = true 

// 11 >= 18 || false
// false || false
// false

// if(age >= 18 || isOwner) {
//     console.log(`You can enter`)
// }
// else {
//     console.log(`You can't enter`)
// }



// NOT Operator (!)

// It is a type of operator which inverts the boolean value.

// console.log(!true)  // false
// console.log(!false)  // true



// WAP to display if Master Javascript class is open or closed.

// Our class will be opened if 
// the time is between 17:00 and 19:30
// the day is between sun to thursday
// there is no any holidays

// our class will be closed if
// the time is between not 17:00 and 19:00
// it is weekend 
// there is holiday

// let currTime = 18
// let isWeekend = false
// let isHoliday = true


// 18 >= 17.5 && 18 <= 19 && !true && !false
// true && true && false && true
// false

// first way to write.....................................
// if(currTime >= 17.5 && currTime <= 19 && isWeekend === false && isHoliday === false) {
//     console.log('Class is OPEN right now')
// }
// else {
//     console.log('Class is CLOSED right now')
// }


// // second way to write.....................................
// if(currTime >= 17.5 && currTime <= 19 && !isWeekend && !isHoliday) {
//     console.log('Class is OPEN right now')
// }
// else {
//     console.log('Class is CLOSED right now')
// }


// // third way .......
// let ourClass = currTime >= 17.5 && currTime <= 19 && !isWeekend && !isHoliday ? 'Class is OPEN right now' : 'Class is CLOSED right now'





// this is my homework i tried it but this way is wrong.....
// if(currTime >= 17 && isWeekend === false) {
//     console.log('Our Class is opened')
// }
// else if(currTime >= 19 && isWeekend) {
//     console.log('Our Class is closed.')
// }
// else {
//     console.log('There is no any holidays')
// }



// WAP to find greatest number among three unique numbers
// use prompt to input three numbers

// tg.html...

// let x = +prompt('Enter your first number')
// let y = +prompt('Enter your second number')
// let z = +prompt('Enter your third number')

// x - 5
// y - 3
// z - 3

// x if x is gt y and x is gt z => x is greatest
// y if y is gt x and y is gt z => x is greatest
// z if z is gt y and z is gt x => is greatest ,.......(z is greatest)    



// if(x > y && x > z) {
//     document.write(`Among ${x}, ${y} and ${z}, Here ${x} is the greatest number than others.`)
// }
// else if(y > x && y > z) {
//     document.write(`Among ${x}, ${y} and ${z}, Here ${y} is the greatest number than others.`)
// }
// else {
//     document.write(`Among ${x}, ${y} and ${z}, Here ${z} is the greatest number than others.`)
// }



// Among, x, y and x is the greatest number





// Special operators

// Ternary (Conditional) Operators:
// It is shorthand operator for if ealse statement. 

// syntax: condition ? code to executed if condition is true : code to be executed if condition is false 

// for eg:
// let age = 18

// if(age >= 18) {
//     console.log('Can Vote')
// }
// else {
//     console.log('Cannot Vote')
// }

// using Ternary operator:
// age >= 18 ? console.log('Can Vote') : console.log('Cannot Vote')


// others ways.... 

// let voteMessageIE;
// if(age >= 18) {
//     voteMessageIE = 'Can Vote'
//     }
//     else {
//         voteMessageIE = 'Cannot Vote'
//     }
//     console.log(voteMessageIE)

    // others ways in Ternary operators....

// let voteMessage = age >= 18 ? ('Can Vote') : ('Cannot Vote')

// console.log(voteMessage)






// Short Circuiting using AND and OR operators:

// let age = 19; 

// if(age >= 18) {
//     sendMessage(`Election is happening on 1st May, Please got to vote`)
// }

// let age = 20

// using && operators.........

// true && console.log(`Election is happening on 1st May, Please got to vote`)
// age >= 18 && console.log(`Election is happening on 1st May, Please got to vote`)





// usinig || operators.........

// '' || 'Bikash' || 2023 || false || 19 || true

// output: 'Bikash'

// undefined || 0 || 0n || false || NaN || true || null 

// output: ture 

// let userName;

//         // undefined || 'MerosathiUser'

// userName = userName || 'MerosathiUser'

// console.log(userName)


// let firstName = 'Ram'
// let age = 20
// let address = 'pkr'
// let userName;
// using long method
// if (userName === undefined || userName === '') {
//     userName = 'MeroSathiUser'
// }

// using short circuiting 
// userName = userName || 'MerosathiUser'

// .......undefined || MeroSathiUserRam........
// userName = userName || `MeroSathiUser${firstName}`

// console.log(firstName)
// console.log(age)
// console.log(address)
// console.log(userName)




// Nullish Coalescing Operator (??)
// if in Left Hand Side(LHS) the value is null or undefined Right Hand Side(RHS) will be executed.

// let a;
// a ?? console.log("This is printed because LHS contained null or undefined")

// let b = null
// b ?? console.log("This is printed because LHS contained null or undefined")

// let c = undefined
// c ?? console.log("This is printed because LHS contained null or undefined")

// // but..... it won't be display
// let d = false
// d ?? console.log("This is printed because LHS contained null or undefined")



// spread operator (...)



// Unary Operators
// The operator which can perform its operation on a single operand is known operator.


// Increment Operator (++)
// It increases the value by 1.
// let a = 2 
// a++      // a = a + 1
// console.log(a)

// // Decrement Operator (--)
// // It decreases the value of the operand by 1.
// let b = 3
// b--      // b = b - 1
// console.log(b)

// // Not Operator (!)
// let c = false

// console.log(!c)

// // Unary +
// // its convert string into number
// let d = +"5"
// console.log(d)


// // Unary -
// // its convert into negative
// let e = 10
// console.log(-e)

// console.log(typeof (a))    

// typeof operator also Unary Operator

// ............... 

// POSTFIX and PREFIX
// x++  -> POSTFIX
// ++x  -> PREFIX

// let x = 7
// let y = ++x   // y = 8, x = 8
// let y = x++   // y = 7, x = 8


// console.log(x)  // 8
// console.log(y)  // 7


// let x = 7
// let y = ++x   // x = 8

// console.log(x) // 8
// console.log(y) // 8


// let x = 7
// let y = x-- //y = 7, x = 6

// console.log(x)  // 6
// console.log(y)  // 7

// let x = 7
// let y = --x //y = 6, x = 6

// console.log(x)  // 6
// console.log(y)  // 6


// let x = 10
// console.log(--x) //9
// console.log(x--) //9   ...first console.log(x) after that decrement of x...
// // x = 8
// console.log(x) //8



// let x = 10
// console.log(x--) //10


