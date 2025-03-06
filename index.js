// Return the first two drivers from the array
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

// Return the last two drivers from the array
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

// Array containing the two previously defined functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Higher-order function that returns a function to multiply fare
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};

// Function to double the fare
const fareDoubler = createFareMultiplier(2);

// Function to triple the fare
const fareTripler = createFareMultiplier(3);

// Function to select different drivers based on the passed function
const selectDifferentDrivers = function(drivers, driverFunction) {
    return driverFunction(drivers);
};

// Example Usage
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
console.log(returnFirstTwoDrivers(drivers)); // ['Antonia', 'Nuru']
console.log(returnLastTwoDrivers(drivers)); // ['Amari', 'Mo']
console.log(fareDoubler(10)); // 20
console.log(fareTripler(10)); // 30
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // ['Antonia', 'Nuru']
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); // ['Amari', 'Mo']

