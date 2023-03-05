// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/07_Day_Functions/07_day_functions.md

// Declare a function fullName and it print out your full name.

function fullName(firstName, lastName) {
    const space = ' ';
    const fullName = firstName + space + lastName;
    console.log(fullName);
}

const printFullName = (firstName, lastName) => {
    const space = ' ';
    let fullName = '';
    fullName += firstName;
    fullName += space;
    fullName += lastName;

    console.log(fullName);
};

const getFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
}

const printTheFullName = (fullName) => {
    console.log(fullName);
}

fullName('Matthew', 'Shirtliffe');
printFullName('Matthew', 'Shirtliffe');



// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
let theFullName = getFullName('Amy', 'Shirtliffe');
printTheFullName(theFullName);

theFullName = getFullName('Dylan', 'Bowman');
printTheFullName(theFullName);

// Declare a function addNumbers and it takes two two parameters and it returns sum.
const addNumbers = (a, b) => a + b;
console.log(addNumbers(5, 3));

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
const areaOfRectangle = (length, width) => length * width;
console.log(areaOfRectangle(5, 3));

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

const perimeterOfRectangle = (length, width) => 2 * (length * width);
console.log(perimeterOfRectangle(5, 3));

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
const volumeOfRectPrism = (length, width, height) => length * width * height;
console.log(volumeOfRectPrism(5, 3, 10));

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
const areaOfCircle = (raduius) => Math.PI * raduius * raduius;
console.log(areaOfCircle(10));

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

const circumOfCircle = (radius) => 2 * Math.PI * radius;
console.log(areaOfCircle(10));

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
const calculateDensity = (mass, volume) => {
    return mass / volume;
}

console.log(calculateDensity(20, 2));


// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
const calculateSpeedOfAMovingObject = (totalDistance, timeTaken) => {
    return totalDistance / timeTaken;
}

console.log(calculateSpeedOfAMovingObject(100, 2));

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
const calculateWeight = (mass, gravity=9.81) => mass * gravity;
console.log(calculateWeight(100));
console.log(calculateWeight(100, 1.62));


// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

const convertCelsiusToFahrenheit = (tempInCelsius) => (tempInCelsius * 9/5) + 32;

console.log(convertCelsiusToFahrenheit(20));

const convertFahrenheitToCelsius = (tempInFahrenheit) => (tempInFahrenheit - 32) * 5/9

console.log(convertFahrenheitToCelsius(68));

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
const calculateBodyMassIndex = (weightInKg, height) => (weightInKg / Math.pow((height/100), 2)).toFixed(1)
const bmi = calculateBodyMassIndex(105, 188);

// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

const getBMIClass = (bmi) => {
    if (bmi < 18.5) {
        console.log('Underweight')
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log('Normal weight')
    } else if (bmi >= 25 && bmi <= 29.9) {
        console.log('Overweight')
    } else {
        console.log('Obese')
    }
}

getBMIClass(bmi)


// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer
const checkSeason = (month) => {
    let season = '';
    month = month.toLowerCase()
    switch (month) {
        case 'september':
        case 'october':
        case 'november':
            season = 'Autumn';
            break;
        case 'december':
        case 'january':
        case 'february':
            season = 'Winter';
            break;
        case 'march':
        case 'april':
        case 'may':
            season = 'Spring';
            break;
        case 'june':
        case 'july':
        case 'august':
            season = 'Summer';
            break;
        default:
            season = 'Invalid month';
      }

      return season;
} 


console.log(checkSeason('September'));
console.log(checkSeason('january'));
console.log(checkSeason('May'));
console.log(checkSeason('august'));


// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
const findMax = (...args) => {
    return Math.max(...args);
}

console.log(findMax(1, 2, 3, 4, 5, 100));
console.log(findMax(1, 2, 3, 200, 5, 100));
console.log(findMax(1, 2, 30, 200, 5, 100));
console.log(findMax(1, 2, 30, 20, 5, 10));