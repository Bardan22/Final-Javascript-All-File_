// Function Declaration:-
// function checkAge(age) {
//     //    age < 16 ? `you'll be 16 in ${16 - age} year` : age > 16 ? `you were 16, ${age - 16} years ago` : `you're sweet 16.`
//     if(age < 16) {
//         return `You'll be 16 in ${16 - age} years.`
//     }
//     else if(age > 16) {
//         return `You were 16 ${age - 16} years ago.`
//     }
//     else {
//         return `You're sweet 16.`
//     }
// }

// let x = checkAge(10)
// console.log(x)



// Function Expression:-
// const checkAge = function(age) {
//     if(age < 16) {
//         return `You'll be 16 in ${16 - age} years.`
//     }
//     else if(age > 16) {
//         return `You were 16 ${age - 16} year ago.`
//     }
//     else{
//         return `You're sweet 16.`
//     }
// }
// console.log(checkAge(15))



// Mark and John BMI:-

// const checkBMI1 = (name1, name2) => {
//     let mass = 92
//     let height = 1.95
//     let Mark = mass / height ** 2

//     let mass1 = 78
//     let height1 = 1.69
//     let John = mass1 / height1 ** 2

//     let markHigherBMI = Mark > John

//     return markHigherBMI ? `${name1}'s BMI (${Mark.toFixed(1)}) is higher than ${name2}'s BMI` : `${name2}'s BMI (${John.toFixed(1)}) is higher than ${name1}'s BMI`

//     // if(markHigherBMI) {
//     //     return `${name1}'s BMI (${Mark.toFixed(1)}) is higher than ${name2}'s BMI (${John.toFixed(1)}).`
//     // }
//     // else {
//     //     return `${name2}'s BMI (${John.toFixed(1)}) is higher than ${name1}'s BMI (${Mark.toFixed(1)}).`
//     // }

// }

// let BMI = checkBMI1('Mark', 'John')
// console.log(BMI)


// in class

function bmiCalc(height, weight) {
    const bmi = weight / height ** 2
    return bmi
}

function compareBMI(person1Height, person1Weight, person2Height, person2Weight, person1Name, person2Name) {
    const person1BMI = bmiCalc(person1Height, person1Weight)
    const person2BMI = bmiCalc(person2Height, person2Weight)
    if (person1BMI > person2BMI) {
        return `${person1Name}'s BMI (${person1BMI.toFixed(1)}) is higher than ${person2Name}'s BMI (${person2BMI.toFixed(1)})`
    }
    else {
        return `${person2Name}'s (${person2BMI.toFixed(1)}) is higher than ${person1Name}'s (${person1BMI.toFixed(1)})`
    }
}



// Using Arrow Function ..........

// const bmiCalc = (height, weight) => {
//     const bmi = weight/height**2
//     return bmi  
// }

// const compareBMI = (person1Height, person1Weight, person2Height, person2Weight, person1Name, person2Name) => {
//     const person1BMI = bmiCalc(person1Height, person1Weight)
//     const person2BMI = bmiCalc(person2Height, person2Weight)
//     if (person1BMI > person2BMI) {
//         return `${person1Name}'s BMI (${person1BMI.toFixed(1)}) is higher than ${person2Name}'s BMI (${person2BMI.toFixed(1)})`
//     }
//     else {
//         return `${person2Name}'s (${person2BMI.toFixed(1)}) is higher than ${person1Name}'s (${person1BMI.toFixed(1)})`
//     }
// }

// console.log(bmiCalc(1.66, 50))

console.log(compareBMI(1.69, 78, 1.95, 92, 'Mark', 'John'))



