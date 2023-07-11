let currTime = 16
let isWeekend = true

// let noHoliday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday']  
// let holiday = ['Friday', 'Saturday']


if(currTime >= 17 && isWeekend === false) {
    console.log('Our class is opend.')
}
else if(currTime <= 19 && isWeekend) {
    console.log('Today is Weekend')
}
else {
    console.log('There is no any class.')
}













// if(currTime >= 17 && isWeekend) {
//     console.log('Our Class is opened')
// }
// else if(currTime >= 19 && isWeekend === false) {
//     console.log('Our Class is closed.')
// }
// else {
//     console.log('There is no any holidays')
// }