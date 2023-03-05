// this is your main.js script
// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/02_Day_Data_types/02_day_data_types.md


// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
const challenge = '30 Days Of JavaScript';
// Print the string on the browser console using console.log()
console.log(challenge);
// Print the length of the string on the browser console using console.log()
console.log(challenge.length);
// Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());
// Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());
// Cut (slice) out the first word of the string using substr() or substring() method
let firstWord = challenge.substring(3, 8);
console.log(firstWord);

firstWord = challenge.substr(3, 4);
console.log(firstWord);

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let phrase = challenge.substring(3); // no end needed
console.log(phrase);

const fromIndex = 3;
phrase = challenge.substr(3); // no length needed
console.log(phrase);

// Check if the string contains a word Script using includes() method
const word = 'Script';
console.log(`${challenge} contains the word ${word}: ${challenge.includes(word)}`);

// Split the string into an array using split() method
const partsLetters = challenge.split('');
console.log(partsLetters);

// Split the string 30 Days Of JavaScript at the space using split() method
const partsWords = challenge.split(' ');
console.log(partsWords);

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
const companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
const companies = companiesString.split(',')
console.log(companies);

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
const newChallange = challenge.replace('JavaScript', 'Python');
console.log(newChallange);

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(`The character ${challenge.charAt(15)} at index 15 of ${challenge}`);

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(`The character code of J in ${challenge} at index ${challenge.indexOf('J')} is ${challenge.charCodeAt(challenge.indexOf('J'))}`);

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(`The position of the first occurrence of a in 30 Days Of JavaScript is ${challenge.indexOf('a')}`);

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(`The position of the last occurrence of a in 30 Days Of JavaScript is ${challenge.lastIndexOf('a')}`);

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const badSentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(`The position of the first occurrence of the word because in ${badSentence} is ${badSentence.indexOf('because')}`);

// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(`The position of the last occurrence of the word because in ${badSentence} is ${badSentence.lastIndexOf('because')}`);

// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(`The position of the first occurrence of the word because in ${badSentence} is ${badSentence.search('because')}`);

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
const challengeWhiteSpace = ' 30 Days Of JavaScript ';
console.log(challengeWhiteSpace.trim())


// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30'));
// Use startsWith() method with the string 30 Days Of JavaScript and make the result false
console.log(challenge.startsWith('Days'));


// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('JavaScript'));
// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match('a'));
console.log(challenge.match(/a/));
console.log(challenge.match(/a/gi));



// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
const partOne = '30 Days of';
const partTwo = 'JavaScript';
console.log(partOne + ' ' +  partTwo);
console.log(partOne.concat(' ',partTwo));


// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));

// Exercise: Level 2
console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.");

console.log("Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.")

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log('10' === 10);
console.log(+'10' === 10);
console.log(~~'10' === 10);
console.log(Number('10') === 10);
console.log(parseInt('10') === 10);



// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat('9.8') === 10);
console.log(Math.ceil(parseFloat('9.8')) === 10);

// Check if 'on' is found in both python and jargon
console.log('python'.indexOf('on') > 0);
console.log('jargon'.indexOf('on') > 0);

console.log('python'.search(/on/));
console.log('jargon'.search(/on/));
console.log('python'.match(/on/));
console.log('jargon'.match(/on/));

// I hope this course is not full of jargon. Check if jargon is in the sentence.
console.log(`I hope this course is not full of jargon.`.indexOf('jargon') != -1);

// Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random() * 101));




// Generate a random number between 50 and 100 inclusively.
let min = 50;
let max = 100;
min = Math.ceil(min);
max = Math.ceil(max);
console.log(Math.floor(Math.random() * (max - min + 1) + min)); 

// Generate a random number between 0 and 255 inclusively.
min = 0;
max = 255;
min = Math.ceil(min);
max = Math.ceil(max);
console.log(Math.floor(Math.random() * (max - min + 1) + min));

console.log('JavaScript'.charAt(Math.random() * 'JavaScript'.length));

// Use console.log() and escape characters to print the following pattern.

console.log('1 1 1 1 1 \n2 1 2 4 8\n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125\n');

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

const aSentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(aSentence.substr(aSentence.indexOf('because '), 'because '.repeat(3).length) )


// Count the number of word love in this sentence.
const love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
console.log(love.match(/love/gi).length);

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(aSentence.match(/because/gi).length);
// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const dirtySentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
console.log(dirtySentence.replace(/@|%|$|&|#|;/gi, ''));

// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let annualIncome = ((5000 + 15000) * 12) + 10000;
console.log(annualIncome);

const salText =  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let salaries = salText.match(/\d+/g);
console.log(salaries)
annualIncome = ((Number(salaries[0]) + Number(salaries[2])) * 12) + Number(salaries[1]);
console.log(annualIncome)


// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/02_Day_Data_types/02_day_data_types.md#random-number-generator


