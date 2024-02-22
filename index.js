// Code your solution in this file!
// Global constant for the headquarters' street
const homeStreet = 42;

// Function to calculate distance in blocks from the headquarters to a given location
const distanceFromHqInBlocks = (passengerLocation) => {
    return Math.abs(passengerLocation - homeStreet);
};

// Function to calculate distance in feet from the headquarters to a given location
const distanceFromHqInFeet = (passengerLocation) => {
    let distanceInBlocks = distanceFromHqInBlocks(passengerLocation);
    return distanceInBlocks * 264; // 1 block = 264 feet
};

// Function to calculate distance traveled in feet between two locations
const distanceTravelledInFeet = (startBlock, endBlock) => {
    let blocks = Math.abs(startBlock - endBlock);
    return blocks * 264; // 1 block = 264 feet
};

// Function to calculate fare price based on distance traveled
const calculatesFarePrice = (start, destination) => {
    let distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
        return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // $0.02 per foot for distance between 400 and 2000 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat fare for distance between 2000 and 2500 feet
    } else if (distance > 2500) {
        return 'cannot travel that far'; // Beyond 2500 feet
    }
};