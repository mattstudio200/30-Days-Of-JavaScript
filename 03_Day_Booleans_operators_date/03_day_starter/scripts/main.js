// this is your main.js script

// look at this for imspiration https://www.omnicalculator.com/

// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/03_Day_Booleans_operators_date/03_booleans_operators_date.md

// https://dorey.github.io/JavaScript-Equality-Table/


// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

const firstName = 'Matthew';
const lastName = 'Shirtliffe'; 
const country = 'United Kingdom'; 
const city = 'Sheffield';
const age = 34;
const isMarried = false;
const now = new Date();
const year = now.getFullYear();


console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof now);
console.log(typeof year);


// Check if type of '10' is equal to 10
console.log(10 == '10');
console.log(10 === '10');

// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === '10');

// Boolean value is either true or false.

//     Write three JavaScript statement which provide truthy value.
//     Write three JavaScript statement which provide falsy value.

console.log(1 ? 'truthy':'falsy');
console.log(0 ? 'truthy':'falsy');
console.log(-2 ? 'truthy':'falsy');
console.log(-1 ? 'truthy':'falsy');

console.log("" ? 'truthy':'falsy');
console.log("blah" ? 'truthy':'falsy');

console.log(true ? 'truthy':'falsy');
console.log(false ? 'truthy':'falsy');

console.log(0 ? 'truthy':'falsy');
console.log(0n ? 'truthy':'falsy');
console.log(null ? 'truthy':'falsy');
console.log(undefined ? 'truthy':'falsy');
console.log(NaN ? 'truthy':'falsy');
console.log('' ? 'truthy':'falsy');
console.log("" ? 'truthy':'falsy');
console.log(`` ? 'truthy':'falsy');

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

//     4 > 3
//     4 >= 3
//     4 < 3
//     4 <= 3
//     4 == 4
//     4 === 4
//     4 != 4
//     4 !== 4
//     4 != '4'
//     4 == '4'
//     4 === '4'
//     Find the length of python and jargon and make a falsy comparison statement.

// 4 > 3 == true;
// 4 >= 3 == true;
// 4 < 3 == false;
// 4 <= 3 == false;
// 4 == 4 == true;
// 4 != 4 == false;
// 4 == 4 == true;
// 4 != 4 == false;
// 4 !== 4 == false;
// 4 != '4' ==  false
// 4 == '4' = true
// 4 === '4' == false


console.log(4 > 3); // true
console.log(`4 > 3: ${4 > 3}`); // true

console.log(4 >= 3); // true
console.log(`4 >= 3: ${4 >= 3}`); // true

console.log(4 < 3); // false
console.log(`4 < 3: ${4 < 3}`);


console.log(4 <= 3); // false
console.log(`4 <= 3: ${4 <= 3}`);

console.log(4 == 4); // true
console.log(`4 == 4: ${4 == 4}`);

console.log(4 != 4); // false
console.log(`4 != 4: ${4 != 4}`);

console.log(4 !== 4); // false
console.log(`4 !== 4: ${4 !== 4}`);

console.log(4 != '4'); // false
console.log(`4 != '4': ${4 != '4'}`);

console.log(4 !== 4); // false
console.log(`4 !== 4: ${4 !== 4}`);

console.log(4 != '4'); // false
console.log(`4 != '4': ${4 != '4'}`);

console.log(4 != '4'); // false
console.log(`4 != '4': ${4 != '4'}`);

console.log(4 == '4'); // true
console.log(`4 == '4': ${4 == '4'}`);

console.log(4 === '4'); // false
console.log(`4 === '4': ${4 === '4'}`);



// Use the Date object to do the following activities

//     What is the year today?
console.log(`The year is ${new Date().getFullYear()}`);
//     What is the month today as a number?
console.log(`The month is ${new Date().getMonth() + 1}`);
//     What is the date today?
console.log(`The date is ${new Date().getDate()}`);
//     What is the day today as a number?
console.log(`The date is ${new Date().getDay() + 1}`);
//     What is the hours now?
console.log(`The hours is ${new Date().getHours()}`);
//     What is the minutes now?
console.log(`The minutes is ${new Date().getMinutes()}`);
//     Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(`The numbers of seconds elapsed from January 1, 1970 is ${new Date().getTime()}`);

// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// Enter base: 20
// Enter height: 10
// The area of the triangle is 100

// let base = prompt('Enter base', 'base number goes here');
// let height = prompt('Enter height', 'height number goes here');
// let area = 0.5 * base * height;
// console.log(area)


// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12

// let sideA = prompt('Enter side a');
// let sideB = prompt('Enter side b');
// let sideC = prompt('Enter side c');
// let perimeter = Number(sideA) + Number(sideB) + Number(sideC);
// console.log(`The perimeter of the triangle is ${perimeter}`)


// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

// let length = Number(prompt('length'));
// let width = Number(prompt('width'));
// let area = length * width;
// let perimeter = 2 * (length + width);
// console.log(`area ${area}`)
// console.log(`perimeter ${perimeter}`)

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// let radius = Number(prompt('radius'));
// let area = Math.PI * radius * radius;

// let circumference = 2 * Math.PI * radius;
// console.log(`area ${area}`);
// console.log(`circumference ${circumference}`);



// Calculate the slope, x-intercept and y-intercept of y = 2x -2

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

// Compare the slope of above two questions.

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// Enter hours: 40
// Enter  per hour: 28
// Your weekly earning is 1120

// let hours = Number(prompt('hours'));
// let rate = Number(prompt('rate'));

// console.log(`Your weekly earning is ${hours * rate}`);

// If the length of your name is greater than 7 say, your name is long else say your name is short.
const myname = `${firstName} ${lastName}`
console.log(myname.length > 7  ? 'your name is long': 'your name is short')

// Your first name, Asabeneh is longer than your family name, Yetayeh

console.log(`Your first name, ${firstName} is ${firstName.length > lastName.length ? 'longer' : 'shorter'} than your family name, ${lastName}`)
 
const myAge = 250;
const yourAge = 25;

console.log(`I am ${myAge - yourAge} older than you.`);

// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// let yearUserWasBorn = Number(prompt('Enter birth year'));
// const yearUserWasBornDate = new Date(yearUserWasBorn);
// const userAge = new Date().getFullYear() -  yearUserWasBornDate;

// console.log(`You are ${userAge}.`);
// console.log(userAge >= 18 ? 'You are old enough to drive': `You are ${userAge}. You will be allowed to drive after ${18-userAge} years.`);

// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// let yearUserWasBorn = Number(prompt('Enter birth year'));
// const yearUserWasBornDate = new Date(yearUserWasBorn);
// const userAge = new Date().getFullYear() -  yearUserWasBornDate;
// const seconds = userAge * 60 * 60 * 24 * 365;
// console.log(userAge)
// console.log(`You lived ${seconds} seconds`)


// console.log(`You are ${userAge}.`);
// console.log(userAge >= 18 ? 'You are old enough to drive': `You are ${userAge}. You will be allowed to drive after ${18-userAge} years.`);

// Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm
const humanYear = now.getFullYear();
let humanMonth = now.getMonth() + 1;
humanMonth = humanMonth < 9 ? `0${humanMonth}` : `${humanMonth}`;
let humanDay = now.getDate();
humanDay = humanDay < 9 ? `0${humanDay}` : `${humanDay}`;
let humanHours = now.getHours();
humanHours = humanHours < 9 ? `0${humanHours}` : `${humanHours}`;
let humanMinutes = now.getMinutes();
humanMinutes = humanMinutes < 9 ? `0${humanMinutes}` : `${humanMinutes}`;

console.log(`${humanYear}-${humanMonth}-${humanDay} ${humanHours}:${humanMinutes}`);
console.log(`${humanDay}-${humanMonth}-${humanYear} ${humanHours}:${humanMinutes}`);
console.log(`${humanDay}/${humanMonth}/${humanYear} ${humanHours}:${humanMinutes}`);

// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05
// done above


















