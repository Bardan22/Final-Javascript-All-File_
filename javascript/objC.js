// Q:1...

// const student = {
//     firstName: 'Shyam',
//     lastName: 'Thapa',
//     symbolNo: 23456789,
//     obtainedMarks: [70, 80, 50, 60, 90, 40, 30, 85],
//     totalMarks : 800,
//     showResults: function() {
//         let studentMarks = this.obtainedMarks.reduce((acc, curr) => {
//                 return acc + curr
//             }, 0)
//         let obtainedPercentage = studentMarks / this.totalMarks * 100
//         let obtainedGrade;

//         if(obtainedPercentage >= 90) {
//             obtainedGrade = 'A+'
//         }
//         else if(obtainedPercentage >= 80) {
//             obtainedGrade = 'A'
//         }
//         else if(obtainedPercentage >= 70) {
//             obtainedGrade = 'B+'
//         }
//         else if(obtainedPercentage >= 60) {
//             obtainedGrade = 'B'
//         }
//         else if(obtainedPercentage >= 50) {
//             obtainedGrade = 'C+'
//         }
//         else if(obtainedPercentage >= 40) {
//             obtainedGrade = 'C'
//         }
//         else if(obtainedPercentage >= 30) {
//             obtainedGrade = 'D+'
//         }
//         else if(obtainedPercentage >= 20) {
//             obtainedGrade = 'D'
//         }
//         else {
//             obtainedGrade = 'E'
//         }

//         console.log(`Dear ${this.firstName} ${this.lastName}, Your symbol number is ${this.symbolNo}. You have secured '${obtainedGrade}' grade in your examination.`)
//     }
// }
// student.showResults()

// Q.1:
// Coding Challenge
// Here's an array having objects as its elements
// const data = [
// { id: 1, name: 'Ram' },
//     { id: 2, name: 'Shyam' },
//     { id: 3, name: 'Hari' },
//     { id: 4, name: 'Harry' },
//     { id: 5, name: 'Gita' },
//     { id: 6, name: 'Sita' },
// ]

// => WAP to create array of objects having odd id.

// output must be:
// [{id:1, name: "Ram"}, {id:3, name: "Hari"}, {id:5, name: "Gita"}]

// const data1 = [
//     { id: 1, name: 'Ram' },
//     { id: 3, name: 'Hari' },
//     { id: 2, name: 'Shyam' },
//     { id: 5, name: 'Gita' },
//     { id: 6, name: 'Sita' },
//     { id: 4, name: 'Harry' },
// ]

// wrong code...
// const output = data.filter((e, i) => i % 2 === 0)
// console.log(output)

// correct code...
// const output = data1.filter( e => e.id % 2 !== 0)
// console.log(output)

// HW...
// const products = [
//     { id: 1, productName: "Yellow Shirt", productPrice: 900 },
//     { id: 2, productName: "Red Shirt", productPrice: 1900 },
//     { id: 3, productName: "Blue Shirt", productPrice: 600 },
//     { id: 4, productName: "Purple Shirt", productPrice: 550 },
//     { id: 5, productName: "Black Shirt", productPrice: 2300 },
//     { id: 6, productName: "White Shirt", productPrice: 800 },
//     { id: 7, productName: "Orange Shirt", productPrice: 750 },
// ]

// WAP to create an array of objects having productPrice that ranges from 200 to 600.

// output:
// let output1 = products.filter( (e) => e.productPrice <= 600 && e.productPrice >= 100)
// console.log(output1)

// Q.2:
// => WAP to add 1 key value in each object (for eg: address: "Kathmandu") of the array

// const data = [
//     { id: 1, name: 'Ram' },
//     { id: 3, name: 'Hari' },
//     { id: 2, name: 'Shyam' },
//     { id: 5, name: 'Gita' },
//     { id: 6, name: 'Sita' },
//     { id: 4, name: 'Harry' },
// ]

// it is not expected output...
// const output2 = data.map( e => e.address = 'Pokhara')
// console.log(output2)

// In the data array add one key value address: "kathmandu" in each object element.

// it is expected...
// const output2 = data.map( e => {
//     return {...e, address: "Pokhara"}
// })
// console.log(output2)

// iteration...
// [
// {id: 1, name: "Ram", address: "Pokhara"},
// {id: 3, name: "Hari", address: "Pokhara"}
// {id: 2, name: "Shyam", address: "Pokhara"}
// {id: 5, name: "Gita", address: "Pokhara"}
// {id: 6, name: "Sita", address: "Pokhara"}
// {id: 4, name: "Harry", address: "Pokhara"}
// ]

// Q.3
// // Coding Challenge 2
// Here's a word given "MISSISSIPPI"
// WAP to return an object that has letters as key and no. of repetition of letters is value.
// For example the output required from the given word is
// { M : 1, I : 4, S : 4, P : 2 }

// let word = "MISSISSIPPI"
// let output3 = [...word].reduce((acc, curr) => {
//     if(acc[curr]) {
//         acc[curr]++
//     }
//     else{
//         acc[curr] = 1
//     }
//     return acc
// }, {})

// console.log(output3)

// using arrow function-
// const output = (letter) => {
//   let y = [...letter].reduce((acc, curr) => {
//     acc[curr] ? acc[curr]++ : (acc[curr] = 1);
//     return acc;
//   }, {});
//   return y;
// };
// let x = output(word);
// console.log(x);

// create a function to return the object like above by passing the string in the function as an argument.

// objFunc("BANANA")

// using.....
// ternary o
// short Circuiting

// ternary operator:
// let word = "BANANA";

// let word = "BANANA";
// const output = (letter) => {
//   let y = [...letter].reduce((acc, curr) => {
//     acc[curr] ? acc[curr]++ : (acc[curr] = 1);
//     return acc;
//   }, {});
//   return y;
// };
// let x = output(word);
// console.log(x);

// acc = { B: 1}
// // 1 iteration
// // if condition
// acc["B"]  //undefined
// // else
// acc["B"] = 1

// acc = { B: 1, A: 1}
// // 2 iteration
// // if condition
// acc["A"]  //undefined
// // else
// acc["A"] = 1

// acc = { B: 1, A: 1, N: 1}
// // 3 iteration
// // if condition
// acc["N"]  //undefined
// // else
// acc["N"] = 1

// acc = { B: 1, A: 2, N: 1}
// // 4 iteration
// // if condition
// acc["A"]  //1
// // else
// acc["A"] = 1

// acc ={ B: 1, A: 2, N: 2}
// // 5 iteration
// // if condition
// acc["N"]  //1
// // else
// acc["N"] = 1

// acc = { B: 1, A: 3, N: 2}
// // 6 iteration
// // if condition
// acc["A"]  //1
// // else
// acc["A"] = 1

// acc = object name
// curr = key

// const obj = {}
// obj['name']="bardan"
// obj['Lname']="nepali"

// console.log(obj)

// ttttt

// const bankAccountBikash = {
//     firstName: 'Bikash',
//     lastName: 'Karki',
//     accountNo: 123456,
//     currentBalance: 1000,
//     transaction: [],
//     fundDeposite: function(amount) {
//         this.currentBalance += amount
//         //  transaction.......
//         this.transaction.push(`+${amount}`)
//         console.log(this.transaction)

//         console.log(`${this.firstName} ${this.lastName}, Rs.${amount} has been deposited in your Acc No. ${this.accountNo} and your total balance is ${this.currentBalance}`)
//     },
//     fundWithdrawal: function (amount) {

//         if (this.currentBalance >= amount) {
//             this.currentBalance -= amount
//             //  transaction.......
//             this.transaction.push(`-${amount}`)
//             console.log(this.transaction)

//             console.log(`Dear ${this.firstName}, Rs.${amount} is withDrawal from your account no. ${this.accountNo}`)
//         }
//         else {
//             console.log(`Dear ${this.firstName}, Your balance is not sufficient to withdraw Rs. ${amount}, Your current balance is just Rs. ${this.currentBalance}`)
//         }
//     },
//     fundCheck: function () {
//         console.log(`Dear ${this.firstName} ${this.lastName}, Your cureent balance is Rs.${this.currentBalance}`)
//     },

// }

// // console.log(bankAccountBikash.currentBalance)
// bankAccountBikash.fundDeposite(10000)
// bankAccountBikash.fundDeposite(5000)
// // console.log(bankAccountBikash.currentBalance)
// bankAccountBikash.fundWithdrawal(10000)
// bankAccountBikash.fundWithdrawal(3000)

// bankAccountBikash.fundCheck()
