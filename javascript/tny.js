// let currTime = 18
// let isWeekend = false
// let isHoliday = false

// currTime >= 17.5 && currTime <= 19 && !isWeekend && !isHoliday ? console.log('Class is OPEN right now') : console.log('Class is CLOSED right now')




// function declaration:
function masterCls(currTime, isWeekend, isHoliday) {
    if(currTime >= 17.5 && currTime <= 19) {
        return `Class is OPEN right now`
    }
    else if(!isWeekend && !isHoliday) {
        return `Class is closed right now.`
    }
    else {
        return `There is no any class today`
    }
}

console.log(masterCls(18, false, false))