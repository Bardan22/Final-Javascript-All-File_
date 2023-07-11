// Challenge1 : 
// A bakery sells cupcakes for $2 each and cookies for $1.50 each. Write a JavaScript function called calculateTotalCost that takes in the number of cupcakes and cookies a customer wants to purchase, and returns the total cost of their order.

// const calculateTotalCost = (cost1, cost2) => {
//     const totalCost = cost1 + cost2
//     return totalCost
// }
// let tCost = calculateTotalCost(2, 1.50)
// console.log(`The total cost of Cupcakes and Cookies is '$ ${tCost}'.`)

// Shorthand: ...................................
// const calculateTotalCost = (cost1, cost2) => cost1 + cost2 
// let tCost = calculateTotalCost(2, 1.50)
// console.log(`The total cost of 'Cupcakes' and 'Cookies' is '$ ${tCost}'.`)



// Challenge 2:.................................
// A car rental company charges a base rate of $50 per day and an additional $20 per day for insurance. Write a JavaScript function called calculateRentalCost that takes in the number of rental days and returns the total cost of renting a car with insurance.

// code here.................... 
// const calculateRentalCost = (rate, insurance) => rate + insurance
// let cost = calculateRentalCost(50, 20)
// console.log(`The total cost of renting car with insurance is '$${cost}' per day.`)  



// .......................... 
// Challenge 3:
// A bookstore sells books at a discounted price. The original price of a book is $25, but the store offers a 20% discount. Write a JavaScript function called calculateDiscountedPrice that takes in the number of books a customer wants to purchase and returns the total cost after applying the discount.

// code here.................... 
// const calculateDiscountedPrice = (price, discount) => {
//     const offers = price / 100 * discount
//     const tCost = price - offers
//     return tCost
// }
// let total = calculateDiscountedPrice(25, 20)
// console.log(`The total cost of books after applying 20% discount is '$${total}'.`)



// Challenge 4:.......................
// A pizza delivery service charges $2 for each topping added to a pizza. Write a JavaScript function called calculatePizzaCost that takes in the number of toppings and the size of the pizza (small, medium, or large), and returns the total cost of the pizza.
// Small pizza costs $10
// Medium pizza costs $12
// Large pizza costs $14

// const calculatePizzaCost = (small, medium, large, service) => {
//     const added = (small + medium + large)
//     const charges = service * 3
//     const total = charges + added
//     return total
// }
// let Cost = calculatePizzaCost(10, 12, 14, 2)
// console.log(`The total cost of the pizza is '$${Cost}' with delivery service charges.`)



// Challenge 5:...........................
// A gym membership costs $50 per month. However, if a person signs up for a 6-month membership, they get a 10% discount. Write a JavaScript function called calculateMembershipCost that takes in the number of months a person wants to sign up for and returns the total cost of the membership.

// code here.................... 
// const calculateMembershipCost = (cost, discount, month) => {
//     const beforeDis = cost * month
//     const divide = beforeDis / 100 * discount
//     const toCost = beforeDis - divide
//     return toCost
// }

// let mCost = calculateMembershipCost(50, 10, 6)
// console.log(`The total cost of a Gym membership is '$${mCost}' after 10% discounted for 6 month.`)


// Challenge 6:.......................
// A shipping company charges based on the weight of a package. Write a JavaScript function called calculateShippingCost that takes in the weight of
// a package and returns the shipping cost according to the following rates:

// Packages weighing less than or equal to 2kg cost $5.
// Packages weighing more than 2kg but less than or equal to 5kg cost $10.
// Packages weighing more than 5kg cost $15.

// code here........................
// const calculateShippingCost = (kg, cost1, cost2, cost3) => {
//     const packageWeight = kg
    

//     if(packageWeight <= 2) {
//         console.log(`Packages weighing less than or equal to 2kg cost '$${cost1}'`)
//     }
//     else if (packageWeight > 2 && packageWeight <= 5) {
//         console.log(`Packages weighing more than 2kg but less than or equal to 5kg cost '$${cost2}'`)
//     }
//     else if(packageWeight > 5){
//         console.log(`Packages weighing more than 5kg cost '$${cost3}'`)
//     }
// }

// let weightCost = calculateShippingCost(2, 5, 10, 15)
// console.log(weightCost)




// loops challenges: .....................
// A bakery sells cupcakes for $2 each. Write a JavaScript function called calculateTotalRevenue that takes in the number of cupcakes sold in a day and returns the total revenue generated.

// const calculateTotalRevenue = (i) => {
//     // let i = 10
//     let sum = 0
//     for(i; i<10;) {
//         console.log(i)
//         sum+=i
//         i++
//     }
// }

// console.log(calculateTotalRevenue(10))