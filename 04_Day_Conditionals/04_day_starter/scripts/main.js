// this is your main.js script

// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/04_Day_Conditionals/04_day_conditionals.md

// alert('Open the browser console whenever you work on JavaScript')

// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// const age = Number(prompt('Enter your age:'));

// if (age >= 18) {
//     console.log('You are old enough to drive');
// } else {
//     console.log(`You are not old enough to drive but will be in ${18 - age} year${18 - age > 1 ? 's' : ''}`);
// }

// const myAge = 34;
// if (age > myAge) {
//     console.log(`You are ${age - myAge} year${myAge - age > 1 ? 's' : ''} older than me.`);
// }
// else if(age < myAge) {
//     console.log(`You are ${myAge - age} year${myAge - age > 1 ? 's' : ''} younger than me.`);
// }
// else {
//     console.log(`You are the same age as me.`);
// }

let a = 4;
let b = 3;

if (a > b) {
    console.log(`${a} is greater than ${b}`);
}
else {
    console.log(`${a} is less than ${b}`);
} 

console.log(a > b ? `${a} is greater than ${b}` : `${a} is less than ${b}`);

// const number = Number(prompt('Enter a number:'));

// if (number % 2 === 0) {
//     console.log(`${number} is even`);
// }
// else {
//     console.log(`${number} is odd`);
// }

// console.log(number % 2 === 0 ? `${number} is even` : `${number} is odd`);

// Write a code which can give grades to students according to theirs scores:

//     80-100, A
//     70-89, B
//     60-69, C
//     50-59, D
//     0-49, F

const score = 50;

if(score >= 80 && score <= 100){
    console.log('A')
} else if (score >= 70 && score <= 79) {
    console.log('B')
} else if (score >= 60 && score <= 69) {
    console.log('C')
} else if (score >= 50 && score <= 59) {
    console.log('D')
} else if (score >= 0 && score <= 49) {
    console.log('F')
}

const month = 'February';

switch (month) {
    case 'September':
    case 'October':
    case 'November':
        console.log('The season is Autumn');
        break;
    case 'December':
    case 'January':
    case 'February':
        console.log('The season is Winter');
        break;
    case 'March':
    case 'April':
    case 'May':
        console.log('The season is Spring');
        break;
    case 'June':
    case 'July':
    case 'August':
        console.log('The season is Summer');
        break;
    default:
      console.log('In valid month');
  }

const day = 'saturday';

switch (day) {
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
      console.log(`${day} is a working day.`)
      break
    case 'saturday':
    case 'sunday':
      console.log(`${day} is a weekend.`)
      break
    default:
      console.log('It is not a week day.')
}


const year = new Date().getFullYear();
let monthNumber = 1;
switch (month) {
    case 'January':
        monthNumber = 1;
        break
    case 'February':
        monthNumber = 2;
        break
    case 'March':
        monthNumber = 3;
        break
    case 'April':
        monthNumber = 4;
        break
    case 'May':
        monthNumber = 5;
        break
    case 'June':
        monthNumber = 6;
        break
    case 'July':
        monthNumber = 7;
        break
    case 'August':
        monthNumber = 8;
        break
    case 'September':
        monthNumber = 9;
        break
    case 'October':
        monthNumber = 10;
        break
    case 'November':
        monthNumber = 11;
        break
    case 'December':
        monthNumber = 12;
        break
    default:
        monthNumber = 12;
}

console.log(`${month} has ${new Date(year, monthNumber, 0).getDate()} days.`);





