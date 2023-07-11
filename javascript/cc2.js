
// // BMI ....


// const bmiCalc = (height, weight) => {
//     const bmi = weight / height ** 2
//     return bmi
// }

// function compareBMI(person1Height, person1Weight, person2Height, person2Weight, person1Name, person2Name) {
//     const person1BMI = bmiCalc(person1Height, person1Weight)
//     const person2BMI = bmiCalc(person2Height, person2Weight)

//    return (person1BMI > person2BMI)
//     ? `${person1Name}'s BMI (${person1BMI.toFixed(1)}) is higher than ${person2Name}'s BMI (${person2BMI.toFixed(1)})`:
//       `${person2Name}'s (${person2BMI.toFixed(1)}) is higher than ${person1Name}'s (${person1BMI.toFixed(1)})`

//     // if (person1BMI > person2BMI) {
//     //     return `${person1Name}'s BMI (${person1BMI.toFixed(1)}) is higher than ${person2Name}'s BMI (${person2BMI.toFixed(1)})`
//     // }
//     // else {
//     //     return `${person2Name}'s (${person2BMI.toFixed(1)}) is higher than ${person1Name}'s (${person1BMI.toFixed(1)})`
//     // }
// }

// console.log(compareBMI(1.69, 78, 1.95, 92, 'Mark', 'John'))





// // Dolphin vs Koalas...


const calcAvgScore = (score1, score2, score3) => {
    const avgScore = (score1+score2+score3)/3
    return avgScore
}

function checkWinner(t1score1, t2score2, t3score3, t2score1, t2score2, t2score3, t1Name, t2Name) {
    const team1 = calcAvgScore(t1score1, t2score2, t3score3)
    const team2 = calcAvgScore( t2score1, t2score2, t2score3)

    return (team1 > team2 && team1 >= 100)? `${t1Name} wins the trophy!`:
    (team1 > team2 && team1 >= 100)? `${t1Name} wins the trophy!`:
    (team1 === team1 && team1 >= 100 && team2 >= 100)? `Both Teams are Drow.`:`No one wins the Trophy.`


    // if(team1 > team2 && team1 >= 100) {
    //     return `${t1Name} wins the trophy!`
    // }
    // else if(team2 > team1 && team2 >= 100) {
    //     return `${t2Name} wins the trophy!`
    // }
    // else if(team1 === team1 && team1 >= 100 && team2 >= 100) {
    //     return `Both Teams are Drow.`
    // }
    // else {
    //     return `No one wins the Trophy.`
    // }
}

console.log(checkWinner(97, 112, 105, 109, 95, 106, 'Dolphin', 'Koalas'))





// master javascript class:


// function declaration:
// const masterCls = (currTime, isWeekend, isHoliday) => currTime >= 17.5 && currTime <= 19 && !isWeekend && !isHoliday ? 'Class is OPEN right now' : 'Class is CLOSED right now'

// if(currTime >= 17.5 && currTime <= 19) {
//     return `Class is OPEN right now`
// }
// else if(!isWeekend && !isHoliday) {
//     return `Class is closed right now.`
// }
// else {
//     return `There is no any class today`
// }

// console.log(masterCls(18, false, false))