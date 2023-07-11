

// // Challenge #1 and #2....

//     // I wrote this..........
//     //  Mark's BMI.....
//     let mass = 95  // 78
//     let height = 1.88  //1.69
//     BMI = mass / height ** 2
//     let Mark = (`'${BMI.toFixed(1)}'`)  // 27.31
    
//     //  John's BMI.....
//     let mass1 = 85 //92    
//     let height1 = 1.76  // 1.95
//     BMI = mass1 / height1 ** 2
//     let John = (`'${BMI.toFixed(1)}'`)  // 24.19

//       let markHigherBmi = Mark
//       let johnHigherBmi = John
//       console.log("Who has the higher BMI? <br><br>")

//       markHigherBmi > johnHigherBmi ? console.log(`"Mark's BMI ${Mark} is higher than John's!"`) : console.log(`"John's BMI ${John} is higher than Mark's!"`)


 

 // In class time......

//  Research it => 'Associativity and Precendence of operators'


//  let markMass = 78
//  let markHeight = 1.69

//  let johnMass = 92
//  let johnHeight = 1.95

//  let markBMI = markMass / markHeight ** 2
//  let johnBMI = johnMass / (johnHeight * johnHeight)
// //  console.log(markBMI)
// //  console.log(johnBMI)

// let markHigherBMI = markBMI > johnBMI

// // console.log(markHigherBMI)

// if (markHigherBMI) {
//     console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})`)
// }
// else {
//     console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's(${markBMI.toFixed(1)})`)
// }

// Ternary Operator:

// markHigherBMI ? console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})`) : console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's(${markBMI.toFixed(1)})`)










// let dolphinesScore = 110  // 108, 89
// let koalasScore = 110 // 91, 110

// if(dolphinesScore > koalasScore) {
//     console.log("Dolphine wins the highest average score with a trophy!")
// }
// else if(dolphinesScore === koalasScore && koalasScore === dolphinesScore) {
//     console.log("Both teams have the same score.")
// }
// else {
//     console.log("Koalas wins the highest average score with a trophy!")
// }

// after....
///////////////////////////////////////////////// 

// let avgDolphineScore = (97+112+105) / 3
// let avgKoalasScore = (109+95+106) / 3

// // console.log(avgDolphineScore)
// // console.log(avgKoalasScore)

// if(avgDolphineScore > avgKoalasScore && avgDolphineScore >= 100) {
//     console.log("Dolphine wins the highest average score with a trophy!")
// }
// else if(avgKoalasScore > avgDolphineScore && avgKoalasScore >= 100) {
//     console.log("Koalas wins the highest average score with a trophy!")
// }
// else if(avgDolphineScore === avgDolphineScore && avgDolphineScore >= 100 && avgKoalasScore >= 100) {
//     console.log("Both Team DRAWS")
// }
// else {
//     console.log("No one wins the Trophy.")
// }
/////////////////////////////

function calcAvgScore(score1, score2, score3) {
    const avgScore = (score1+score2+score3)/3
    return avgScore
}

function checkWinner(t1score1, t2score2, t3score3, t2score1, t2score2, t2score3, t1Name, t2Name) {
    const team1 = calcAvgScore(t1score1, t2score2, t3score3)
    const team2 = calcAvgScore( t2score1, t2score2, t2score3)

    if(team1 > team2 && team1 >= 100) {
        return `${t1Name} wins the trophy!`
    }
    else if(team2 > team1 && team2 >= 100) {
        return `${t2Name} wins the trophy!`
    }
    else if(team1 === team1 && team1 >= 100 && team2 >= 100) {
        return `No one wins the Trophy.`
    }
}

console.log(checkWinner(97, 112, 105, 109, 95, 106, 'Dolphin', 'Koalas'))



////////////////////////////

// const gym = (name1, name2) => {
//     let avgDolphineScore = (97+112+105) / 3
//     let avgKoalasScore = (109+95+106) / 3
    
//     if(avgDolphineScore > avgKoalasScore && avgDolphineScore >= 100) {
//         return `${name1} wins the highest average score with a trophy!`
//     }
//     else if(avgKoalasScore > avgDolphineScore && avgKoalasScore >= 100){
//         return `${name2} wins the highest average score with a trophy!`
//     }
//     else if(avgDolphineScore === avgDolphineScore && avgDolphineScore >= 100 && avgKoalasScore >= 100) {
//         return `Both Team DRAWS`
//     }
//     else {
//         return `No one wins the Trophy.`
//     }

// }
// console.log(gym(97, 112, 105 'Dolphin', 'Koalas'))