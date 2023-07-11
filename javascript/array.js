// // Array:-> It is a non primitive datatype. Array are special type of object in javascript which is used to store multiple values in a single variable.

// // Examples of array:-
// // array of fruits
// const fruit = ['apple', 'banana', 'cherry', 'dragonfruit']

// // array of years
// const year = [2000, 2001, 2002, 2003, 2010, 2023]

// // array of color
// const color = ['red', 'green', 'blue', 'yellow', 'black', 'white']

// // array of cities
// const cities = ['KTM', 'BKT', 'PKR', 'BDP']

// // Array of mixed datatypes / mixed array
// const mixedArr = ["Ram", 23, true, undefined, null, 100n, symbol(1), fruit, ['abc', 123], {a:1, b:2}]

// // array of fashion brands
// const fashionBrand = ['Nike', 'GUCCI', 'Chanel', 'Louis Vuitton']

// // arrays of cars
// const cars = ['Audi', 'BMW', 'Lexus', 'Genesis']

// // Emty array
// const emptyArr = []

// console.log(typeof (fruit))

// // syntax to create an array literals

// // variableType variableName = [el1, el2, el3, ....elN]   // el means = element

// other way to create array...
// // Since array is an object in javascript, we can use array constructor to create an array.
// Array constructor
// const fruit2 = new Array('Grapes', 'Watermelon', 'Mango', 'Avacado')
// console.log(fruit2)

// Data of an array is called elements of that array.

// Array always starts from 0 index.

// Accessing element of an array using its index.
// const fruit = ['apple', 'banana', 'cherry', 'dragonfruit']
// console.log(fruit[0])  // 'apple'
// console.log(fruit[2])  // 'cherry'
// console.log(fruit[1])  // 'banana'
// console.log(fruit[3])  // 'dragonfruit'
// console.log(fruit[7])  // 'undefined'  , because it is not defined in array...

// create an array using index

// let years = []
// years[0] = 1997
// years[1] = 1998
// years[2] = 1999
// years[3] = 2000
// years[4] = 2001
// console.log(years)

// reassigning value using index
// fruit[1] = "watermelon"
// console.log(fruit)

// years[7] = 2005 //this will create an array holes because there are no elements defined in 5th and 6th index of that respective array.

// console.log(years)
// console.log(years[5])  // undefined

// Property and Methods of arrays.

// length:

// const fruit = ["apple", "banana", "cherry", "dragonfruit", "orange"];
// console.log(fruit.length) // 5

// Methods of array:
// indexOf() -> This Method returns index of the element that is passed as an argument in the method call. If non existing element is passed than it will always return -1.
// console.log(fruit.indexOf("apple")); // 0
// console.log(fruit.indexOf("banana")); // 1
// console.log(fruit.indexOf("cherry")); // 2
// console.log(fruit.indexOf('avocado')) // -1 , If non existing element is passed than it will always return -1.

// includes() -> This method return the boolean value based on the argument passed.
// console.log(fruit.includes('banana'))  // true
// console.log(fruit.includes('avocado'))  // false

// // Methods that mutates the array (changes the original array)

// 1. push -> This method add an element to the end of the array.

// fruit.push("kiwi", "watermelon", "grapes");
// console.log(fruit);

// 2. pop() -> it removes the element from the end of an array
// console.log(fruit.pop()) //grapes

// const popedFruit = fruit.pop() //grapes
// console.log(fruit)
// console.log(popedFruit) // watermelon

// 3. unshift -> It add new element in the beginning of an array

// let names = ['Ram', 'Hari', 'Sita', 'Gita']
// names.unshift('Ajay', 'Bardan')
// console.log(names)

// 4. shift -> It removes the first element of an array
// const x = names.shift()
// console.log(names)
// console.log(x)`

// eg. of difference between Property and Method:
// const person1 = {
//     firstname: 'Ram',
//     lastname: 'Shrestha',
//     age: function (birthYear) {
//         return 2023 - birthYear
//     }
// }

// console.log(person1.firstname)  // Property, if there is simple property that is Property. It return general value
// console.log(person1.age(2000))  // Method,  If there is function in object that is method. It return dynamic value

// 5. reverse method -> It simply reverse the elements in an array
// names.reverse()
// console.log(names)
// let name1 = ['Ram', 'Hari', 'Sita', 'First_Gita']
// // console.log(name1.reverse())
// name1.reverse()
// console.log(name1)

// 6. splice method -> It is use to add / remove any elements from an array
// 1st arg - starting index
// 2nd arg - count from that index
// 3rd /remaining arg - elements to be added

// let arr1 = [1, 2, 3, 4, 6, 'hello', 'Ram', 2000, 'javascript', 900]

// Removing elements using splice
// let  splicedarr = arr1.splice(5, 4)

// console.log(splicedarr)  // ['hello', 'Ram', 2000, 'javascript']
// console.log(arr1)  // [1, 2, 3, 4, 6, 900]

// Adding elements using splice
// arr1.splice(6, 0, 'world')
// console.log(arr1)  // adding 'world'

// removing element using splice
// const splicedArr = arr1.splice(5, 4)
// console.log(splicedArr)

// 7. sort method -> It is used to sort an array.
// String sorted method:
// let student = [
//   "Susil",
//   "Rachana",
//   "Bikash",
//   "Paridhi",
//   "Kaushal",
//   "Manjisha",
//   "Ram",
//   "Shyam",
//   "Hari",
//   "Gita",
//   "Bardan",
// ];

// ascending order:
// student.sort();

// descending order:

// 1. method chainning:........
// student.sort().reverse();
// console.log(student);

// 2. method:........
// const ascSorted = student.sort()
// ascSorted.reverse()
// console.log(ascSorted)

// Number sorted method:
// let numbers = [9, 5, 2001, 6, 1, 20, 19, 33, 348748, 100273, 70]

// console.log(numbers)

// ascending order:
// numbers.sort((a, b) => a-b)
// console.log(numbers)

// numbers.sort((a, b) => {
//     console.log(`${a} is comparing with ${b}`)
//     return a - b
// })
// console.log(numbers)

// Sort method expects a compare function, a compare function has two arguments (generally written as a and b).

// If compare function :
// returns negative value - It indicates a should be sorted before b
// returns positive value - It indicates a should be sorted after b
// returns 0 - both a and b are same.

// descending order:
// numbers.sort((a, b) => b-a)
// console.log(numbers)

// String:
// let a = 'apple'
// let b = 'banana'

// let res = a.localeCompare(b)
// console.log(res)  // -1

// let a = 'zebra'
// let b = 'banana'

// let res = a.localeCompare(b)
// console.log(res) // 1 (+1)

// let a = 'banana'
// let b = 'banana'

// let res = a.localeCompare(b)
// console.log(res)  // 0

// let a = "Banana";
// let b = "banana";

// characterCode checking...
// console.log(a.charCodeAt(0)); // B - 66, it comes first before b...
// console.log(b.charCodeAt(0))  // b - 98, it comes second after a...
// -1, +1, 0

// let res = a.localCompare(b);
// let res = a.localeCompare(b);
// console.log(res); // 1 (+1)

// others way to making ascending and descending order for strings in sort:
// let student = ['Susil', 'Rachana', 'Bikash', 'Paridhi', 'Kaushal', 'Manjisha', 'Ram', 'Shyam', 'Hari', 'Gita', 'Bardan']

// ascending order:
// student.sort((a,b) => a.localeCompare(b))
// console.log(student)

// descending order:
// student.sort((a,b) => b.localeCompare(a))
// console.log(student)

// create a function that takes an array and rerturn last element of that array.
// let car = ['BMW', 'FORD', 'MERSIDIC', 'PRADO', 'van']
// const vichel = name => {
//     return  name.pop()
// }
// console.log(vichel(car))

// create an array and use loop to display each individual element in the console.

// let student = ['Susil', 'Rachana', 'Bikash', 'Paridhi', 'Kaushal', 'Manjisha', 'Ram', 'Shyam', 'Hari', 'Gita', 'Bardan']

// for(let i = 0; i <= student.length - 1; i++) {
//     console.log(student[i])
//     // i++
// }

// .........
// let array1 = ['a', 'b', 'c', 'd', 'e']

// function _arrLastEl(arr) {
//     return arr[4]
// }

// const arrLastEl = a => a[a.length - 1]
// //array1[5 - 1] array1[4]
// //student[11 - 1] student[10]
// console.log(arrLastEl(array1)) //e
// console.log(arrLastEl(student)) //Bardan
// console.log(arrLastEl([1, 2, 3, 4, 5]))
// console.log(array1)
// console.log(student)

//Create an array and use loop to display each individual element in the console
// const arr = ["apple", "banana", "orange", "grapes"];
// const displayEl = arr => {
//     for (let i = 0; i <= arr.length - 1; i++) {
//         console.log(arr[i])
//     }
// }

// Methods that return a new array using the shallow copy of original array.

// Slice - This method doesn't mutates the original array, instead it create a shallow copy of the original array and returns specific portion of that array.

// 1 st - starting index
// 2 nd - end index (but it doesn't include the end index)

// let elements = [1, 4, 6, 'Hello', 'Javascript', 2939, 3838]
// let slicedarr = elements.slice(2, 5)
// console.log(slicedarr)  //[6, 'Hello', 'Javascript']
// console.log(elements) // Here is not changes the original array in slice method, but there is chages in splice.

// concat - returns an array by concating  two arrays.
// let a = ['a', 'b']
// let b = [1, 2]
// const concatArr = a.concat(b)  // ['a', 'b', 1, 2,]
// const concatArr = b.concat(a)  // [1, 2, 'a', 'b']
// console.log(concatArr)

// spread operator - it spreads elements inside of an array.

// let arr1 = [90, 20, 50]
// const arr2 = arr1.concat(a)   // concating using concat method
// const output = [...arr1, ...a, ...b]  // concating using spread operator..

// console.log(output)

// Map - It is an important method that is used to change or map individual elements of an array.
// Map method has a callback function (higher order function) and that callback has three parameter
// 1 st para - It points element of the array
// 2 nd para - It points index of that element
// 3 rd para - It points the overall array itself (not really used)

// Map method loop over an array and changes the changes the individual elements as per its callback function.

// Map methods returns a new array. It doesn't mutuate the original array.

// syntax of MAP METHOD
// arr1.map((e, i, a) => { })

// const numbers = [1, 2, 3, 4, 5, 6]

// // return a new that with elements doubled the value of element in numbers array.  //[2, 4, 6, 8, 10, 12] e.g:-

// let db1Numbers = numbers.map((e, i, a) => e * 2)

// // Behind the work of MAP:
// // [2, 4, 6, 8, 10, 12]
// // 1*2 = 2
// // 2*2 = 4
// // 3*2 = 6
// // 4*2 = 8
// // 5*2 = 10
// // 6*2 = 12

// console.log(db1Numbers)  // [2, 4, 6, 8, 10, 12]

// array of salaries in this organization is given, this years everyone's getting 15% increment. create a new array of improvised salary.

// let salary2079 = [12000, 17000, 34000, 67000, 45000, 37000]

// my code: bt it is wrong...
// let salary2080 = salary2079.map(e => e / 100 * e)

// 1st way...
// let salary2080 = salary2079.map(e => e * 1.15)

// 2nd way...
// let salary2080 = salary2079.map(e => e * 0.15 + e)

// 3rd way...
// let salary2080 = salary2079.map(e => e * (15 / 100) + e)

// console.log(salary2080)

// let students = ['Susil', 'Rachana', 'Bikash', 'Paridhi', 'Kaushal', 'Manjisha', 'Ram', 'Shyam', 'Hari', 'Gita', 'Bardan']

// let studentWithRollNo = students.map((e, i) => `Roll No.${i + 1} ${e}`)

// console.log(studentWithRollNo)

// let arr = [1, 2, 3, 4, 5]
// // [0,2,6,12,20]

// let arr1 = arr.map((e, i) => e * i)
// console.log(arr1)

//The temperature of Kathmandu this week is recorded as [23, 27, 30, 31, 22, 32, 25] degree celcius. Convert this data into Fahrenheit.

// HomeWork.............
// let temperatureOfKtm = [23, 27, 30, 31, 22, 32, 25]
// let Fahrenheit = temperatureOfKtm.map(e => (e * 9/5) + 32)
// console.log(Fahrenheit)

// Q....
// create an array of numbers and return a new array showing boolean value according to the number in the array is even or not.

// [2, 4, 5, 9, 6, 70]

// output: [true, true, false, false, true, true]

// let numberArr = [2, 4, 5, 9, 6, 70]
// let isEvenNumber = numberArr.map(e => e % 2 === 0)

// console.log(isEvenNumber)

// Q...
// create an array of strings and return a new array with number of letters present in that string.

// ['apple', 'banana']

// [5, 6]

// let stringArr = ['apple', 'banana', 'house', 'laptop', 'table', 'fan']
// let wordCount = stringArr.map((e) => e.length)
// console.log(wordCount)

// let stringArr = ['apple', 'banana', 'house', 'laptop', 'table', 'fan']

// const lengthOfArray = stringArr1 => stringArr1.map((e)=>e.length)
// console.log(lengthOfArray(stringArr))

// Create a function that takes array of string and returns the array which shows the count of each string present in the passed array.

// let words = ['paper', 'pencil', 'smartphone', 'watch', 'mat']

// let student = ['Sushil', 'Rachana', 'Bikash', 'Paridhi', 'Kaushal', 'Manjisha', 'Ram', 'Shyam', 'Hari', 'Gita', 'Bardan']

// const stringLength = arr3 => arr3.map(e => e.length)
// console.log(stringLength(words))
// console.log(stringLength(student))

// Filter: It is an array method that returns a new array which is used to filter out the elements from the array.

// syntax:
// array.filter((e, i, arr) => {})

// filter method's callback function needs a condition that filters the element of array based on that condition, if the condition is true the element will be added to the new array that is returned by filter method, if the condition is false then that element won't be added.

// eg:
// create an array of numbers and return a new filtered array which has numbers greater than 8.

// let numArr = [2, 5, 9, 23, 4, 6, 343, 7]
// 2>8 //false
// 5>8 //flase
// 9>8 //true
// 23>8 //true
// 4>8 //false
// 6>8 //false
// 343>8 //true
// 7>8 //false
// [9, 23, 343]

// let filteredArr = numArr.filter((e, i, arr) => e > 8)

// console.log(filteredArr)
// console.log(numArr)

// use the same number array and filter it to return the array with odd numbers

// let oddNum = numArr.filter(e => e % 2 !== 0)
// console.log(oddNum)

// let salariesCom1 = [7500, 15000, 45000, 23000, 12000, 10000, 45000, 27000, 35000]
// let basicsalary = salariesCom1.filter(e => e < 15000)
// console.log(basicsalary)

//In a community a survey was done where salaries earned by community members were collected, the basic salary according to Nepal Government is 15000, use the array data and give exact numbers of people who are getting below basic salary.

// let salariesData = [15000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 120000, 135000, 160000, 175000, 195000, 215000, 235000, 255000, 7900, 11000, 14500]

// let belowBasicSalaries = salariesData.filter(e => e < basicsalary)
// console.log(belowBasicSalaries)
// let noOfPeople = belowBasicSalaries.length
// console.log(`${noOfPeople} people in this community is getting a below average salary.`)

// create an array that shows percentage diffference of the belowBasicSalaries to be 15000.

// [7500 salary  is lagging by 50% to be 15000, 11000 is lagging by x% to be 15000, 14500 salary is lagging by x% to by 15000]

// let percentageDiff = belowBasicSalaries.map(e => `${e} salary is lagging by ${(e / basicsalary) * 100}% to be ${basicsalary}`)
// console.log(percentageDiff)

// people in this community is getting a below average salary

// let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// let oddnum = num.filter((e, i)=> i % 2 !== 0)
// console.log(oddnum)

// let arr = [90, 12, 5, 7, 10, 50, 40, 20]
// // let arr1 =
// let filterArr = arr.filter((e, i, o) => e <= )
// console.log(filterArr)

// Reduce:
// It is also one of the important array method in javascript, unlike map and filter it doesn't return a new array. It returns a single value that can be of any datatype which is accumulated in its accumulator.

// Reduce method generally has two arguments, 1st arg is the callback function and the second arg is initial value of accumulator.

// It has a callback function similiar to map and filter method but it has one extra parameter in the beginning which is the accumulator.

// syntax:
// array.reduce((accumulator, currentElement, currentIndex, array) => {}, initialValue of accumulator)

// let numbers = [1, 32, 3, 4, 5, 6, 78, 89, 9]

// let sum = numbers.reduce((acc, curr) => {
//     return acc + curr
// }, 0)

// acc = 0
// curr = 1

// it1 - 0 + 1 -> 1
// it2 - 1 + 32 -> 33
// it3 - 33 + 3 -> 36
// it4 - 36 + 4 -> 40
// it5 - 40 + 5 -> 45
// it6 - 45 + 6 -> 51
// it7 - 51 + 78 -> 129
// it8 - 129 + 89 -> 218
// it9 - 218 + 9 -> 227
// acc -> 227

// console.log(sum)

// let salariesData = [15000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 120000, 135000, 160000, 175000, 195000, 215000, 235000, 255000, 7500, 11000, 14500]

// find out average salary of this community
// sumation x / N

// // my code... wrong
// let averagesalary = salariesData.reduce((e, i) => {
//     let total = e + i
//     return total / 2
// })
// console.log(averagesalary.toFixed(1))

// Right code........
// let avgSalary = salariesData.reduce((acc, curr) => {
//     return acc + curr
// }) / salariesData.length

// console.log(avgSalary.toFixed(1))

// acc = 0
// curr = 15000

// it1 - (0 + 15000) / 21 -> 714.28
// it2 - (714.28 + 20000) / 21 -> 986.39
// it3 - (986.39 + 30000) / 21 -> 1475
// it4 - (1475 + 40000) / 21 -2150
// it5 - (2150 + 50000) / 21 -> 2950
// it6 - (2950 + 60000) / 21 -> 3750
// it7 - (3750 + 70000) / 21 -> 4500
// it8 - (4500 + 80000) / 21 -> 5200
// it9 - (5200 + 90000) / 21 -> 6000

// string Method
// converting string to array

// let word = 'Hello World'
// 1st way...
// let spreadMethod = [...word]    // [H,e,l,l,o,' ',W,o,r,l,d]
// let splitMethod = word.split('')   // [H,e,l,l,o,' ',W,o,r,l,d]
// let splitMethod = word.split(' ')   // ['Hello', 'World']
// let splitMethod = word.split('o')   // ['Hell', ' W', 'rld']  //here o is become a sperator...
// console.log(splitMethod)

// 2nd way...
// console.log(Array.from(word))   // [H,e,l,l,o,' ',W,o,r,l,d]

// number of letter a ?

// let name = 'Shiva Prasad Chapagain'

// // first way......long
// let splitm = name.split('')
// let mapStr = splitm.map((e) => {
//     if(e === 'a') {
//         return 1
//     } else {
//         return 0
//     }
// })
// let output = mapStr.reduce((acc, curr) => acc + curr)
// console.log(output)

// second way.....method chaining...
// let name = 'Shiva Prasad Chapagain'

// let output = [...name].map(e => {
//     if(e === 'a' || e === 'A') {
//         return 1
//     } else {
//         return 0
//     }
// }).reduce((acc, curr) => acc + curr)
// console.log(output)

// third way.... using reduce method....
// let name = 'Shiva Prasad Chapagain'

// let output = name.split('').reduce((acc, curr) => {
//     if(curr === 'a' || curr === 'A') {
//         acc++
//     }
//     return acc
// }, 0)
// console.log(output)

// create a function that takes two arguments first is the word and second is the letter and return output as `${word} has ${x} no of ${letter} present in it.`

// rachana...
// const findChar = (name, letter) =>
//   [...name].reduce(
//     (acc, curr) => (curr.toLowerCase() === letter ? acc + 1 : acc),
//     0
//   );

// console.log(findChar("Aaaa", "a"));

// ..........
// const ourFunc = (flatter, letter) => {
//         let count = [...flatter].reduce((acc, curr) => {
//         if(curr.toLowerCase() === letter) {
//             acc++
//         }
//         return acc
//     }, 0)
//     return `${flatter} has ${count} no of ${letter} present in it.`
// }

// console.log(ourFunc('Banana', 'n'))
// console.log(ourFunc('Elephant', 'e'))

// .tolowerCase()

// Array Destructuring

// It is the feature of Js that allows to extract values from an array and assign it in the variable.

// eg:
// let numbers = [10, 20, 30]
// let [a, b, c] = numbers

// console.log(a)
// console.log(b)
// console.log(c)

// Rest Parameter (...)

// let names = ['Bikash', 'Bardan', "Sushil", 'Manjisha', 'Rachana', 'Kaushal', 'Ram', 'Sita']

// let [name1, name2, ...restNames] = names
// console.log(name1)
// console.log(name2)
// console.log(restNames)
// console.log(names)
