// Code your solution in this file!
//const drivers = ['Sally, Bob, Freddy, Claudia'];

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(value){
    return ((fare) => fare*value);
}

const fareDoubler = (fare) => fare * 2

const fareTripler = (fare) => fare * 3

const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(arrayOfDrivers)
}