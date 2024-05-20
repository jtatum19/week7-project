// Create an array called ages with specified values
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Subtract the first element from the last element programmatically
let firstElement = ages[0];
let lastElement = ages[ages.length - 1];
console.log(`Subtraction of last element from first: ${lastElement - firstElement}`);

// Add a new age to the array
ages.push(45); // Adding a new age
lastElement = ages[ages.length - 1];
console.log(`After adding new age, subtraction of last element from first: ${lastElement - firstElement}`);

// Calculate age using a loop
let totalAge = 0;
for (let age of ages) {
    totalAge += age;
}
let averageAge = totalAge / ages.length;
console.log(`Average age: ${averageAge}`);

// Create an array called names with specified values
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Calculate the average number of letters per name using a loop
let totalLetters = 0;
for (let name of names) {
    totalLetters += name.length;
}
let averageLetters = totalLetters / names.length;
console.log(`Average number of letters per name: ${averageLetters}`);

// Concatenate all names together, separated by spaces
let concatenatedNames = '';
for (let name of names) {
    concatenatedNames += name + ' ';
}
concatenatedNames = concatenatedNames.trim(); // Remove the trailing space
console.log(`Concatenated names: ${concatenatedNames}`);

// Access the last element of any array
console.log(`Last element of ages array: ${ages[ages.length - 1]}`);

// Access the first element of any array
console.log(`First element of ages array: ${ages[0]}`);

// Create a new array called nameLengths
let nameLengths = [];
for (let name of names) {
    nameLengths.push(name.length);
}
console.log(`nameLengths array: ${nameLengths}`);

// Calculate the sum of all elements in the nameLengths array
let totalNameLengths = 0;
for (let length of nameLengths) {
    totalNameLengths += length;
}
console.log(`Sum of all elements in nameLengths array: ${totalNameLengths}`);

// Function to concatenate a word to itself n times
const repeatWord = (word, n) => {
    return word.repeat(n);
};
console.log(`Repeat 'Hello' 3 times: ${repeatWord('Hello', 3)}`);

// Function to return a full name
const getFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
};
console.log(`Full name: ${getFullName('John', 'Doe')}`);

// Function to check if the sum of an array of numbers is greater than 100
const isSumGreaterThan100 = (numbers) => {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum > 100;
};
console.log(`Is sum greater than 100: ${isSumGreaterThan100([50, 30, 20, 10])}`);

// Function to return the average of all elements in an array
const getAverage = (numbers) => {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum / numbers.length;
};
console.log(`Average of numbers: ${getAverage([10, 20, 30, 40])}`);

// Function to compare averages of two arrays
const compareAverages = (array1, array2) => {
    let average1 = getAverage(array1);
    let average2 = getAverage(array2);
    return average1 > average2;
};
console.log(`Is average of first array greater than second: ${compareAverages([10, 20, 30], [5, 15, 25])}`);

// Function to check if it's hot outside and if moneyInPocket is greater than 10.50
const willBuyDrink = (isHotOutside, moneyInPocket) => {
    return isHotOutside && moneyInPocket > 10.50;
};
console.log(`Will buy drink: ${willBuyDrink(true, 11.00)}`);

// Check if Chick-fil-A is closed
const isChickFilAClosed = () => {
    const now = new Date();
    const day = now.getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday
    const hours = now.getHours();
    const minutes = now.getMinutes();
    
    // Chick-fil-A is closed on Sundays
    if (day === 0) {
        return true;
    }

    // Chick-fil-A hours (Monday to Saturday): 6:30 AM - 10:00 PM
    const openHour = 6;
    const openMinute = 30;
    const closeHour = 22;
    const closeMinute = 0;

    // Check if current time is within operating hours
    if (hours < openHour || (hours === openHour && minutes < openMinute) ||
        hours > closeHour || (hours === closeHour && minutes >= closeMinute)) {
        return true;
    }

    // Otherwise, Chick-fil-A is open
    return false;
};

console.log(`Is Chick-fil-A closed: ${isChickFilAClosed()}`);