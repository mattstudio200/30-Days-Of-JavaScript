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
// const findMax = (...args) => {
//     return Math.max(...args);
// }


const findMax = (...args) => {

    let max = 0;
    for(let i =0; i < args.length; i++) {
        if(args[i] > max){
            max = args[i];
        }
    }

    return max;
}
    
console.log(findMax(1, 2, 3, 4, 5, 100));
console.log(findMax(1, 2, 3, 200, 5, 100));
console.log(findMax(1, 2, 30, 200, 5, 100));
console.log(findMax(1, 2, 30, 20, 5, 10));


// TODO Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
// TODO Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.


// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(stuff) {
    for(let i = 0; i < stuff.length; i++ ) {
        console.log(stuff[i]);
    }
}

printArray([1, 2, 3, 4, 6]);

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    month = month < 9 ? `0${month}` : `${month}`;
    let day = now.getDate();
    day = day < 9 ? `0${day}` : `${day}`;
    let hours = now.getHours();
    hours = hours < 9 ? `0${hours}` : `${hours}`;
    let minutes = now.getMinutes();
    minutes = minutes < 9 ? `0${minutes}` : `${minutes}`;

    console.log(`${day}/${month}/${year} ${hours}:${minutes}`)
}


showDateTime();

// Declare a function name swapValues. This function swaps value of x to y.

function swapValues(a, b) {
    let temp = a;
    a = b;
    b = temp;
    return [...arguments];
}


console.log(swapValues(3, 4));
console.log(swapValues(4, 5));

function reverseArray(values) {
    const newValues = [];
    for (let i = values.length-1; i > -1; i--) {
        newValues.push(values[i])
    }
    return newValues; 
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(['A', 'B', 'C']));

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray(values) {

    for (let i = 0; i < values.length; i++ ) {
        values[i] = values[i].toUpperCase();
    }
    return values;
}

console.log(capitalizeArray(['a', 'B', 'C', 'Matthew']));
console.log(capitalizeArray(['aaa', 'B', 'C', 'Matthew']));
console.log(capitalizeArray(['aaa', 'B', 'C', 'amy']));


// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(items, item) {
    items.push(item)
    return items;
}

console.log(addItem([1, 2, 3], 6));

// function addItem(items) {
//     items.push(1)
//     return items;
// }

// console.log(addItem([1, 2, 3]));

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(items, index) {
    const removedValue = items.splice(index, 1);
    console.log(removedValue[0])
    return items;
}

console.log(removeItem([1, 2, 3], 0));
console.log(removeItem([1, 2, 3], 1));
console.log(removeItem([1, 2, 3], 2));


// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++ ) {
        sum += numbers[i];
    }

    return sum;
}

console.log(sumOfNumbers([1, 2, 3, 4, 5, 6, 7]));

function sumOfNumbersArgs() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
}

console.log(sumOfNumbersArgs(1, 2, 3, 4, 5, 6, 7));


function sumOfOdds(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++ ) {
        if(numbers[i] % 2 !== 0) {
            sum += numbers[i];
        }
        
    }

    return sum;
}

console.log(sumOfOdds([1, 2, 3, 4, 5, 6, 7]));

function sumOfEven(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++ ) {
        if(numbers[i] % 2 === 0) {
            sum += numbers[i];
        }
        
    }

    return sum;
}

console.log(sumOfEven([1, 2, 3, 4, 5, 6, 7]));

function evensAndOdds(numbers) {
    
    let evens = 0;
    let odds = 0;

    for (let i = 0; i < numbers.length; i++ ) {
        if(numbers[i] % 2 === 0) {
            evens += 1;
        } else {
            odds += 1;
        }
    }

   console.log(`The number of odds are ${odds}.`);
   console.log(`The number of evens are ${evens}.`)

}

evensAndOdds([1, 2, 3, 4, 5, 6, 7]);

// Write a function which takes any number of arguments and return the sum of the arguments
function sumsEm() {
    
    let sum = 0;

    for (let i = 0; i < arguments.length; i++ ) {
        sum += arguments[i];
    }

    return sum;

}

console.log(sumsEm(1, 2, 3, 4, 5));


// Write a function which generates a randomMacAddress
// randomMacAddress

// function randomMacAddress() {

//     let address = "";
//     let result = [];
//     let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

//     for (let n = 0; n < 6; n++) {
//         result.push([hexRef[Math.floor(Math.random() * 16)].toUpperCase(), hexRef[Math.floor(Math.random() * 16)].toUpperCase()]);    
//     }

//     for (let i = 0; i < result.length; i++) {
//         address +=  result[i].join('') + (i !== result.length-1 ? '-' : '')
//     }
//     return address.toUpperCase();

// }

// function randomMacAddress() {
    
//     const numberOfPairs = 6;

//     let address = "";
//     let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

//     for (let i = 0; i < numberOfPairs; i++) {
//         address += hexRef[Math.floor(Math.random() * 16)];
//         address += hexRef[Math.floor(Math.random() * 16)];
//         address += i !== numberOfPairs -1 ? '-' : ''

//     }

//     return address;

// }

function randomMacAddress() {
    
    const numberOfSegs = 6;

    let segments = []

    const hexChar = () => Math.floor(Math.random() * 16).toString(16);

    for (let _ = 0; _ < numberOfSegs; _++) {
        segments.push(`${hexChar()}${hexChar()}`)
    }    

    return segments.join('-').toUpperCase();

}

console.log(randomMacAddress());

// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

// function randomHexaNumberGenerator() {
       
//     const length = 6;

//     let hexnNumber = [];
//     let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

//     hexnNumber.push('#')
//     for (let i = 0; i < length; i++) {
//         // address += hexRef[Math.floor(Math.random() * 16)];
//         hexnNumber.push(hexRef[Math.floor(Math.random() * 16)]);
//     }

//     return hexnNumber.join('');

// }

// console.log(randomHexaNumberGenerator());

function randomHexaNumberGenerator() {
       
    const length = 6;

    let hexnNumber = [];

    hexnNumber.push('#')
    for (let i = 0; i < length; i++) {
        hexnNumber.push(Math.floor(Math.random() * 16).toString(16));
    }

    return hexnNumber.join('');

}

console.log(randomHexaNumberGenerator());

// https://www.bleepingcomputer.com/tutorials/ip-addresses-explained/

// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

// function userIdGenerator() {

//     const length = 7;
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

//     const getRandInclusive = (max, min) => Math.floor(Math.random() * (max - min + 1) + min)
//     // const getRange = (start, end) => {
//     //     let values = [];
//     //     for (let i = start; i <= end; i++) {
//     //         values.push(i);
//     //     }
//     //     return values;
//     // }

//     // let range = [...getRange(65, 90), ...getRange(48, 57), ...getRange(98, 122)];

//     let userId = '';

//     for (let i = 0; i < length; i++) {
//         userId += String.fromCharCode(characters[getRandInclusive(0, characters.length)]);
//     }

//     return userId;
// }

// function userIdGenerator() {

//     const length = 7;
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

//     const getRandInclusive = (max, min) => Math.floor(Math.random() * (max - min + 1) + min)

//     let userId = '';

//     for (let i = 0; i < length; i++) {
//         userId += characters[getRandInclusive(0, characters.length)];
//     }

//     return userId;
// }

// console.log(userIdGenerator());

// Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

function userIdGenerator(numberOfIds = 1, length = 7) {


    userIds = [];

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    const getRandInclusive = (max, min) => Math.floor(Math.random() * (max - min + 1) + min)

    for (let i = 0; i < numberOfIds; i++) {
        let userId = '';
        for (let j = 0; j < length; j++) {
            userId += characters[getRandInclusive(0, characters.length)];
        }
        userIds.push(userId);
    }
    


    return userIds;
}

console.log(userIdGenerator());
console.log(userIdGenerator(10));
console.log(userIdGenerator(10, 10));
console.log(userIdGenerator(20, 6));
console.log(userIdGenerator(5, 20));

// Write a function name rgbColorGenerator and it generates rgb colors.

function rgbColorGenerator() {
    const getVal = () => Math.floor(Math.random() * 255)
    return `${getVal()}, ${getVal()}, ${getVal()}`; 
}
console.log(rgbColorGenerator());

// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors(numberOfValues) {
    const hexChar = () => Math.floor(Math.random() * 16).toString(16);

    const arr = [];

    for(let i = 0; i < numberOfValues; i++) {
        let val = '#';
        for(let j = 0; j < 6; j++) {
            val += hexChar()
        }
        val = val.toUpperCase();
        arr.push(val)
    }

    return arr 
}
console.log(arrayOfHexaColors(10));

// Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors(numberOfValues) {
    const getRGB = () => Math.floor(Math.random() * 255)
    // const hexChar = () => Math.floor(Math.random() * 16).toString(16);

    const arr = [];

    for(let i = 0; i < numberOfValues; i++) {
        let val = [];
        for(let j = 0; j < 3; j++) {
            val.push(getRGB())
        }
        arr.push(val.join(','))
    }

    return arr 
}
console.log(arrayOfRgbColors(10));

// Write a function  which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb(hex) {

    hex = hex.replace('#', '');
    let rgb = [];

    for(let i = 0; i < hex.length; i += 2) {
        // console.log(`${i+1} ${i+2}`)
        let chunk = hex.slice(i, i + 2);
        rgb.push(parseInt(`${chunk[0]}${chunk[1]}`.toLowerCase(), 16))
        
    }

    


    return rgb.join(',') 
}

console.log(convertHexaToRgb("#633E53"));

// Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

function convertRgbToHexa(rbg) {

    rbg = rbg.split(',');
    // console.log(rbg)
    hex = ""

    for(let i = 0; i < rbg.length; i++) {
        // console.log(`${i+1} ${i+2}`)
        // let chunk = rbg.slice(i, i + 2);
        hex +=  parseInt(rbg[i]).toString(16);
        
    }

    hex = '#' + hex
    hex = hex.toUpperCase()
    return hex
}

console.log(convertRgbToHexa("99,62,83"));


function generateColors(colourType, n) {
    if(colourType === 'hexa') {
        return arrayOfHexaColors(n)
    } else if(colourType === 'rgb') {
        return arrayOfRgbColors(n)
    }
    else {
        return null
    }
}

console.log(generateColors('hexa', 3))
console.log(generateColors('hexa', 1))
console.log(generateColors('rgb', 3))
console.log(generateColors('rgb', 1))

// Write a function generateColors which can generate any number of hexa or rgb colors.
// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[rand]] = [arr[rand], arr[i]]
    }

    return arr

    // for (let i = arr.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     const temp = arr[i];
    //     arr[i] = arr[j];
    //     arr[j] = temp;
    // }
    // return arr
}

console.log(shuffleArray([1, 2, 3, 4, 56, 67, 7, 8, 8, 9, 12]))


function factorial(n) {

    for(let i = n-1; i > 0; i--) {
        n = n * i;
    }
    return n
}
console.log(factorial(5))

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not

function isEmpty(value) {
    // return value.length ? false: true
    return Boolean(value.length);
}
console.log(isEmpty([]))
console.log(isEmpty([1]))

// Call your function sum, it takes any number of arguments and it returns the sum.
function sum() {
    let s = 0
    for(let i = 0; i < arguments.length; i++) {
        s += arguments[i];
    }

    return s;
}

console.log(sum(1, 2, 3, 4, 5, 6));

// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

function sumOfArrayItems(arr) {
    let s = 0
    for(let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'number') {
            s += arr[i];
        }
        else {
            s = 'not a number'
            break;
        }
        
    }

    return s;
}

console.log(sumOfArrayItems([1, 2, 3, 4, 5, 6]));

// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

function average(arr) {
    let a = 0;

    for(let i = 0; i < arr.length; i++) {
        a += arr[i];
    }

    return a / arr.length
}

console.log(average([1, 2, 3, 4, 5, 6]));

// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

function modifyArray(arr) {

    const lengthOfArr = arr.length;

    if(lengthOfArr < 5) {
        return 'Not Found';
    }


    arr[4] = arr[4].toUpperCase();


    return arr;
}

console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon', 'Microsoft', 'IBM']));
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']));

// Write a function called isPrime, which checks if a number is prime number.
function isPrime(i) {
      
  let isPrime = true;

  if(i === 1){
    isPrime = false;
  }
  else if(i > 1) {
    for(let j = 2, s = Math.sqrt(i); j <= s; j++) {
        if(i % j === 0){
          isPrime = false;
          break;
        };
      }
  }

  return isPrime;
}

console.log(isPrime(2))
console.log(isPrime(4))
console.log(isPrime(5))
console.log(isPrime(23))
console.log(isPrime(24))

// Write a functions which checks if all items are unique in the array.
function checkArrayIsUnique(arr) {

    const unique = [...new Set(arr)];
    return arr.length === unique.length;

}

console.log(checkArrayIsUnique([1,2,3]))

function checkArrayIsUnique2(array) {

    let valuesAlreadySeen = []

    for (let i = 0; i < array.length; i++) {
      let value = array[i]
      if (valuesAlreadySeen.indexOf(value) !== -1) {
        return false
      }
      valuesAlreadySeen.push(value)
    }
    return true

}

console.log(checkArrayIsUnique2([1,2,3,3]))

// Write a function which checks if all the items of the array are the same data type.
function sameDataType(array) {

    let isSameDataType = true;
    let lastDataType = typeof array[0];

    for (let i = 0; i < array.length; i++) {
        if(typeof array[i] !== lastDataType){
            isSameDataType = false;
            break;
        }
        lastDataType = typeof array[i];
    }

    return isSameDataType;
}

console.log(sameDataType([1, 2, 3, 4]))
console.log(sameDataType(['1','2', '3', '4']))
console.log(sameDataType(['1','2', '3', '4', 5]))

// JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
function isValidVariable(variable) {

    // Start them with a letter, underscore _, or dollar sign $.
    // After the first letter, you can use numbers, as well as letters, underscores, or dollar signs.
    // Don’t use any of JavaScript’s reserved keywords.

    const regex = new RegExp(/^[a-zA-Z_$][a-zA-Z_$0-9]*$/g);
    const found = variable.match(regex);
    return found ? true: false;
}


console.log(isValidVariable('hello'))
console.log(isValidVariable('_hello'))
console.log(isValidVariable('&hello'))

// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
function arrayOfSevenRandomNumbers() {

    const characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let values = [];

    const getRandInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

    while (values.length !==7) {

        const value = characters[getRandInclusive(0, characters.length-1)]
        if(values.indexOf(value) === -1) {
            values.push(value)
        }
    }

    return values;

    
}

console.log(arrayOfSevenRandomNumbers())

// Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
function reverseCountries() {

    const v = []
    const copy = [...countries];
    for(let i = countries.length-1; i > 0; i--){
        v.push(copy[i])
    }

    return v;
}

console.log(reverseCountries())