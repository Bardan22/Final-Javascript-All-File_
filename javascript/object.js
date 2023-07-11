// // Objects:- Objects are non primitive datatype. Objects are used to store data in a well ordered manner. Object stores data in key/value pair or collection and it can store other complex entities as well.

// // syntax of an object
// // variableType identifier = {key1: value, key2: value2, key3: value3}

// // eg: 
// const person = {
//     firstName: 'Ram',
//     lastName: 'Shrestha',
//     birthYear: 2000, 
//     gender: 'Male',
//     isMarried: false,
//     age: (thisYear) => thisYear - person.birthYear
// }

// Ram Shrestha was born on 2000. He is x years old. He is unmarried till data.
// console.log(`${person.firstName} ${person.lastName} was born on ${person.birthYear}. He is ${person.age(2023)} years old. He is unmarried till data.`)

// firstName is the key or property and "Ram" is the value
// age is the method in the person object.


// In Javascript, there are two ways to read / access data from an object.
// 1. Dot Notation:
// console.log(person.birthYear)  // using Dot(.) notation
// console.log(person.isMarried)  // using Dot(.) notation
// console.log(person.age(2023))  // using Dot(.) notation


// 2. Bracket Notation:
// console.log(person['firstName'])   // using Bracket [] notation

// changing values in an object

// person.firstName = 'Sita'  // Dot Notation...
// person['isMarried'] = true  // Bracket Notation...
// console.log(person)

// adding values in an object

// person.class = '+2'
// console.log(person)

// Nullish Coelscing Assignment: The nullish coalescing ( ?? ) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined , and otherwise returns its left-hand side operand.

// person.gender ??= 'female'
// person.avgStepsWalkedInAWeek ??= [4500, 3400, 4500, 5600, 2500, 6700, 5600]
// console.log(person)

// create an object of a car with its brandName, modelname, makeYear, enginType, cc

// const car = {
//     brandName: 'BMW',
//     modelname: 'x',
//     makeYear: 1920,
//     enginType: 'petrol',
//     cc: 900
// }

// console.log(car)


// const Nepal = {
//     common: "Nepal",
//     official: "Federal Democratic Republic of Nepal",
//     nativeName: {
//         nep: {
//             official: "नेपाल संघीय लोकतान्त्रिक गणतन्त्र",
//             common: "नेपाल"
//         }
//     },
//     startOfWeek: "sunday",
//     capitalInfo: {
//         latlng: [
//             27.72,
//             85.32
//         ]
//     }

// }

// console.log(Nepal.nativeName.nep.official)
// Nepal.common = 'nepal'
// console.log(Nepal)

// c/w...
// Latitude is x and longitude is y

// console.log(`Latitude is ${Nepal.capitalInfo.latlng[0]} and longitude is ${Nepal.capitalInfo.latlng[1]}`)


// const arr = ["Apple", "Ball", "Cat", 'Dog']
// arr[0] = "aeroplane"

// console.log(arr)

// Custom objects Methods:

// let person2 = {
//     firstName: "Shyam",
//     lastName: "Khadka",
//     // greet: () => console.log(`Hello ${person2.firstName} ${person2.lastName}`)   // it is arrow function... it cann't access of 'this' keyword in arrow function...
//     greet: function () {
//         console.log(`Hello ${this.firstName} ${this.lastName}`)   // it is function declaretion...  we can use 'this' keyword in declaration function....
//     }
// }
// person2.greet()


// its Rough code it is practice.......
// let man = {
//     firstName: 'Bardan',
//     lastName: 'Nepali',
//     birthYear: 2001,
//     age: (thisYear) => {
//         let sub = thisYear - `${man.birthYear}`
//         return sub
//     },
//     greet: function () {
//         console.log(`Hello ${man.firstName} ${man.lastName}, Your age is ${this.sub}`)
//     }
// }
// man.age(2022)
// man.greet()

// .................. 


// exercise:-.....
// Create a bank account object of a customer where he/she has his/her firstName, lastName, accountNo., currentBalance
// This object should also have method for fund deposite, fund withdrawal and fund check.

// Incase of fund deposite:
// step: add amount that has been deposited with the current balance and show message.

// Incase of fund withdrawal:
// step1: check if there's sufficient balance in the account 
// step2: If there's sufficient balance then deduct amount from currentbalance and show message.
// If there's no sufficient balance just show the message

// Incase of fund check:
// step: show the current balance

// code:
const bankAccountBikash = {
    firstName: 'Bikash',
    lastName: 'Karki',
    accountNo: 123456,
    currentBalance: 1000,
    transaction: [],
    fundDeposite: function(amount) {       
        this.currentBalance += amount 
        //  transaction.......
        this.transaction.push(`+${amount}`)
        console.log(this.transaction)
        // console.log('Transaction' + ' = ' + `[${this.transaction}]`)

        console.log(`${this.firstName} ${this.lastName}, Rs.${amount} has been deposited in your Acc No. ${this.accountNo} and your total balance is ${this.currentBalance}`)
        //  transaction.......
        //  if(this.currentBalance + amount) {
        //     this.transaction.push(`+${amount}`)
        //     console.log(this.transaction)
        //  } 
    },
    fundWithdrawal: function (amount) {
        
        if (this.currentBalance >= amount) {
            this.currentBalance -= amount
            //  transaction.......
            this.transaction.push(`-${amount}`)
            console.log(this.transaction) 
            // console.log('Transaction' + ' = ' + `[${this.transaction}]`)

            console.log(`Dear ${this.firstName}, Rs.${amount} is withDrawal from your account no. ${this.accountNo}`)
        }
        else {
            console.log(`Dear ${this.firstName}, Your balance is not sufficient to withdraw Rs. ${amount}, Your current balance is just Rs. ${this.currentBalance}`)
        }
    },
    fundCheck: function () {
        console.log(`Dear ${this.firstName} ${this.lastName}, Your cureent balance is Rs.${this.currentBalance}`)
    },
    
}

// console.log(bankAccountBikash.currentBalance)
bankAccountBikash.fundDeposite(10000)
bankAccountBikash.fundDeposite(5000)
// console.log(bankAccountBikash.currentBalance)
bankAccountBikash.fundWithdrawal(10000)
bankAccountBikash.fundWithdrawal(3000)

bankAccountBikash.fundCheck()




// my code ...........
// fundWithdrawal: function (wAmount) {
//     bankAccount.currentBalance >= wAmount
//       ? console.log(
//           `Dear ${bankAccount.firstName} ${
//             bankAccount.lastName
//           }  Rs ${wAmount} ahs been withdrawn from your bank account ${
//             bankAccount.accountNo
//           } , your current balance is ${(bankAccount.currentBalance -=
//             wAmount)}`
//         )
//       : console.log(`You don't have sufficient balance`);
//   }



// const bankAcc = {
//     firstName: "Shyam",
//     lastName: "Khadka",
//     accountNo: 123456,
//     currentBalance: 5000,
//     fundDeposite: function (amount) {
//         let sum = bankAcc.currentBalance + amount
//         console.log(`Dear ${this.firstName} ${this.lastName}, your total balance is Rs.${sum}.`)
//     },
//     fundWithDrawal: function (fundWithDrawal) {
//         let sum2 = bankAcc.fundDeposite - fundWithDrawal
//         console.log(`Dear ${this.firstName} ${this.lastName}, Your balance was ${this.fundDeposite} `)
//     }
// }

// bankAcc.fundDeposite(2000)
// bankAcc.fundWithDrawal(3000)
// ...........................................

// Create object Dynamically 
// There are two ways to create objects dynamically in javascript

// Factory Function:
// function postProduct(productName, productPrice, productDescription, counstInStock, paymentBool) {
//     return {
//         product_name: productName,
//         product_price: productPrice,
//         product_description: productDescription,
//         count_in_stock: counstInStock,
//         paymentMessage: () => paymentBool ? console.log(`Product is purchased succesfully`) : console.log(`Failed to purhase product`)
//     }
// }
// const jacket = postProduct('Adidas jacket', 7800, 'This is a very cool jacket', 50, true)
// console.log(jacket)
// // jacket.paymentMessage()
// // console.log(jacket.product_name)   // using Dot Notation
// // console.log(jacket['count_in_stock'])   // using Bracket Notation
// const pant = postProduct('Denim Pant', 2500, 'This is made out of original denim, imported from Indonesia', 20, false)
// console.log(pant)


// Constructor Function:
// function Product(productName, productPrice, productDescription, counstInStock, paymentBool) {
//     this.product_name = productName
//     this.product_price = productPrice
//     this.productDescription = productDescription
//     this.counst_In_Stock = counstInStock
//     this.paymentMessage = () => paymentBool ? console.log(`Product is purchased succesfully`) : console.log(`Failed to Purchase product`)
// }

// const shirt = new Product('Cotton Shirt', 1700, 'This is very nice cotton shirt', 40, false)
// // this.paymentMessage()
// console.log(shirt)