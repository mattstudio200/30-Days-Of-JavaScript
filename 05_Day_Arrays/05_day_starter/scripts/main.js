console.log(countries);
console.log(web_techs);
// alert('Open the browser console whenever you work on JavaScript')
// alert('Open the console and check if the countries has been loaded')

// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/05_Day_Arrays/05_day_arrays.md



// Declare an empty array;
const arr1 = [];
let arr2 = new Array();

// Declare an array with more than 5 number of elements
const payments = [100, 200, 300, 400, 500];

// Find the length of your array
console.log(payments.length);

// Get the first item, the middle item and the last item of the array
console.log(payments[0]);
console.log(payments[2]);
console.log(payments[payments.length-1]);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ['Name', 34, 'Sheffield', 0.25, 'Wed', 'Single', true];
console.log(mixedDataTypes.length);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// Print the array using console.log()
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies)
console.log(itCompanies.join(', '))

// Print the number of companies in the array
console.log(itCompanies.length);

// Print the first company, middle and last company
console.log(itCompanies[0])
console.log(itCompanies[Math.floor((itCompanies.length) / 2)])
console.log(itCompanies[itCompanies.length - 1]);

// Change each company name to uppercase one by one and print them out

console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());


// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies.`)

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
console.log(itCompanies.indexOf('Facebook') < 0 ? 'company is not found': 'Facebook');
console.log(itCompanies.indexOf('Pied piper') < 0 ? 'company is not found': 'Pied piper');


// Filter out companies which have more than one 'o' without the filter method
console.log('Filter out companies which have more than one \'o\' without the filter method');
itCompanies[0].match(/o/gi) || console.log(itCompanies[0]); 
itCompanies[1].match(/o/gi) || console.log(itCompanies[1]); 
itCompanies[2].match(/o/gi) || console.log(itCompanies[2]); 
itCompanies[3].match(/o/gi) || console.log(itCompanies[3]); 
itCompanies[4].match(/o/gi) || console.log(itCompanies[4]);
itCompanies[5].match(/o/gi) || console.log(itCompanies[5]); 
itCompanies[6].match(/o/gi) || console.log(itCompanies[6]); 

// const result = itCompanies.filter(word => !word.includes('oo'));
// console.log(result)

// Sort the array using sort() method

console.log(itCompanies);
itCompanies.sort();
console.log(itCompanies);
itCompanies.reverse();
console.log(itCompanies);

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(3, itCompanies.length));


// Slice out the last 3 companies from the array
console.log(itCompanies.slice(0, itCompanies.length-3));


// Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3, Math.round(itCompanies.length / 2)));

let itCompaniesCopy = itCompanies.slice();


// Remove the first IT company from the array
itCompaniesCopy.shift();
console.log(itCompaniesCopy);

itCompaniesCopy = itCompanies.slice();


console.log(itCompaniesCopy);
// Remove the middle IT company or companies from the array
// delete itCompaniesCopy [Math.floor(itCompanies.length / 2)] 
itCompaniesCopy.splice(Math.floor(itCompanies.length / 2), 1)
console.log('here',itCompaniesCopy);


// Remove the last IT company from the array
itCompaniesCopy.pop()
// Remove all IT companies

itCompaniesCopy.splice(0, itCompaniesCopy.length)

console.log(itCompaniesCopy);

// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

// First remove all the punctuations and change the string to array and count the number of words in the array
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text);
text = text.replace(/,|\./gi, '');
console.log(text);
const words = text.split(' ');
console.log(words);
console.log(words.length);

// in the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat');
console.log(shoppingCart);
// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar');
console.log(shoppingCart);
// remove 'Honey' you are allergic to honey
shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
console.log(shoppingCart);

// modify Tea to 'Green Tea'
shoppingCart.indexOf('Tea') === -1 ? null : shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
console.log(shoppingCart);


// n countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
countries.indexOf('Ethiopia') !== -1 ? console.log(countries[countries.indexOf('Ethiopia')].toUpperCase()) : countries.push('Ethiopia');
// console.log(countries[countries.indexOf('Ethiopia')].toUpperCase())

// in the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.


if(web_techs.indexOf('Sass') === -1){
    web_techs.push('Sass');
} else {
    console.log('Sass is a CSS preprocess')
}
console.log(web_techs);

// Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack)

// The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages);

ages.sort();
console.log(ages);
console.log(ages[0]);
console.log(ages[ages.length-1]);


console.log(ages);
console.log(Math.min(...ages));
console.log(Math.max(...ages));

// Find the median age(one middle item or two middle items divided by two)


// const median = ages % 2 === 0 ? 0 :;  
// alert(median)

const median = ages[Math.floor(ages.length / 2)];
console.log(median);

const median2 = ages[Math.floor(ages.length / 2)] / ages[Math.floor(ages.length / 2)+1];
console.log(median);

const median3 = ages[Math.floor(ages.length / 2)] / ages[Math.floor(ages.length / 2)-2];
console.log(median);

// Find the average age(all items divided by number of items)
console.log(ages.reduce((a,b) => a + b, 0) / ages.length);

// Find the range of the ages(max minus min)
console.log(Math.max(...ages) - Math.min(...ages));

// Compare the value of (min - average) and (max - average), use abs() method 

console.log(Math.abs(Math.min(...ages), ages.reduce((a,b) => a + b, 0) / ages.length))
console.log(Math.abs(Math.max(...ages), ages.reduce((a,b) => a + b, 0) / ages.length))

console.log(Math.abs(Math.abs(Math.min(...ages), ages.reduce((a,b) => a + b, 0) / ages.length), Math.abs(Math.max(...ages), ages.reduce((a,b) => a + b, 0) / ages.length)) )

// Slice the first ten countries from the countries array
console.log(countries.slice(0, 10));
console.log(countries[Math.floor(countries.length / 2)]);
console.log(countries[Math.floor(countries.length / 2)+1]);

console.log(countries.slice(0,countries.length / 2))
console.log(countries.slice(countries.length / 2, countries.length))

