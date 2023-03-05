console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/06_Day_Loops/06_day_loops.md

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ];
  
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

// Iterate 0 to 10 using for loop, do the same using while and do while loop

for(let i = 0; i <=10; i++) {
  console.log(i)
}

let j = 0;
while (j <=10) {
  console.log(j);
  j++;
}

let k = 0
do {
  console.log(k);
  k++
} while (k <= 10)



for(let i = 10; i >=0; i--) {
  console.log(i)
}

j = 10;
while (j >=0) {
  console.log(j);
  j--;
}

k = 10;
do {
  console.log(k);
  k--
} while (k >= 0)

// Write a loop that makes the following pattern using console.log():
for(let i = 1; i <=7; i++) {
  console.log('*'.repeat(i))
}

// Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

for(let i = 0; i <=10; i++) {
  console.log(`${i} x ${i} = ${Math.pow(i, 2)}`)
}

for(let i = 0; i <=10; i++) {
  console.log(`${i} x ${i} = ${i * i}`)
}

// Using loop print the following pattern

console.log('i i^2 i^3')
for(let i = 0; i <=10; i++) {
  console.log(`${i} ${Math.pow(i, 2)} ${Math.pow(i, 3)}`)
}

// Use for loop to iterate from 0 to 100 and print only even numbers
for(let i = 1; i <=100; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}

// Use for loop to iterate from 0 to 100 and print only odd numbers
for(let i = 1; i <=100; i++) {
  if (i % 2 !== 0) {
    console.log(i)
  }
}

// Use for loop to iterate from 0 to 100 and print only prime numbers
for(let i = 1; i <=100; i++) {
  if (i % 2 !== 0) {
    console.log(i)
  }
}

// Use for loop to iterate from 0 to 100 and print only prime numbers
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
for(let i = 1; i <=100; i++) {
  
  let isPrime = true;

  if(i === 1){
    isPrime = false;
  }
  else if(i > 1)
    for(let j = 2, s = Math.sqrt(i); j <= s; j++) {
      if(i % j === 0){
        isPrime = false;
        break;
      };
    }

  isPrime && console.log(`${i} is prime`)
}


// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for(let i = 1; i <=100; i++) {
  sum += i;
  console.log(sum)
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`)


let sumEven = 0;
let sumOdd = 0;

const sums = [0, 0];

for(let i = 1; i <=100; i++) {
  if(i % 2 === 0) {
    sumEven +=i;
    sums[0] +=i;
  }else{
    sumOdd +=i;
    sums[1] +=i;
  }

}
console.log(`The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdd}.`);
console.log(sums);



// Develop a small script which generate array of 5 random numbers
for(let i = 1; i <=5; i++) {  
  console.log(Math.floor(Math.random () * 11))
}

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
console.log('Develop a small script which generate array of 5 random numbers and the numbers must be unique')


let numbers = new Set();
while(numbers.size < 5) {
  numbers.add(Math.floor(Math.random () * 11));
}
numbers = [...numbers];
for(let i = 0; i <=numbers.length-1; i++) {  
  console.log(numbers[i])
}

numbers = [];
while(numbers.length < 5){
    let n = Math.floor(Math.random() * 100) + 1;
    numbers.indexOf(n) === -1 && numbers.push(n);
}
for(let i = 0; i <=numbers.length-1; i++) {  
  console.log(numbers[i])
}

// Develop a small script which generate a six characters random id:
// for(let i = 0; i <=6; i++) {  
//   console.log(numbers[i])
// }

// console.log('a'.charCodeAt(0))

// console.log('A'.charCodeAt(0))

let min = 97;
let max = 122;

let characters = []
for(let i = 0; i <=6; i++) {
  characters.push(Math.floor(Math.random() * (max - min + 1) + min));
}
console.log(String.fromCharCode(...characters));



// Develop a small script which generate any number of characters random id:

characters = []
for(let i = 0; i <=Math.floor(Math.random() * 100); i++) {
  // lower case;
  min = 97;
  max = 122;
  min = Math.ceil(min);
  max = Math.floor(max);
  characters.push(Math.floor(Math.random() * (max - min + 1) + min));
  // numbers
  min = 48;
  max = 57;
  min = Math.ceil(min);
  max = Math.floor(max);
  characters.push(Math.floor(Math.random() * (max - min + 1) + min));

}

console.log(String.fromCharCode(...characters))

// shuffle array Fisher-Yates
for (let i = characters.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  const temp = characters[i];
  characters[i] = characters[j];
  characters[j] = temp;
}
console.log(String.fromCharCode(...characters));
console.log(String.fromCharCode(...characters.sort(() => Math.random() - 0.5)));

// Write a script which generates a random hexadecimal number.
let result = [];
let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

for (let n = 0; n < 6; n++) {
  result.push(hexRef[Math.floor(Math.random() * 16)]);
}

console.log(`#${result.join('')}`);

// Write a script which generates a random rgb color number.
console.log(`rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`);

let newCountries = [];
for(let i =0; i<countries.length-1; i++) {
  newCountries.push(countries[i].toLocaleUpperCase())
}
console.log(newCountries);

let newCountriesLen = [];
for(let i =0; i<countries.length-1; i++) {
  newCountriesLen.push(countries[i].length)
}
console.log(newCountriesLen);


let a = [];
for(let i =0; i<countries.length-1; i++) {
  a.push([countries[i], countries[i].slice(0, 3).toLocaleUpperCase(), countries[i].length])
}
console.log(a);

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
a = [];
for(let i =0; i<countries.length-1; i++) {
  if(countries[i].includes('land')) {
    a.push(countries[i])
  }
}

console.log(a.length ? a : 'All these countries are without land');

let endsInIa = [];
for(let i =0; i<countries.length-1; i++) {
  if(countries[i].endsWith('ia')) {
    endsInIa.push(countries[i])
  }
}

console.log(endsInIa.length ? endsInIa : 'These are countries ends without ia');

// Using the above countries array, find the country containing the biggest number of characters.
let biggestIndex = 0;
for(let i =0; i<countries.length-1; i++) {
  if(countries[i].length > countries[biggestIndex].length){
    biggestIndex = i;
  }
}

console.log(countries[biggestIndex])
console.log(countries[biggestIndex].length)



let lgth = 0;
let longest;

for (var i = 0; i < countries.length-1; i++) {
  if (countries[i].length > lgth) {
    lgth = countries[i].length;
    longest = countries[i];
  }
}

console.log(longest)

let lens = [];
for(let i =0; i<countries.length-1; i++) {
  lens.push(countries[i].length)
}

console.log(Math.max(...lens));


// using the above countries array, find the country containing only 5 characters.

let onlyFive = [];
for(let i =0; i<countries.length-1; i++) {
  if(countries[i].length == 5) {
    onlyFive.push(countries[i]);
  }
}

console.log(onlyFive);

// Find the longest word in the webTechs array
biggestIndex = 0;
for(let i =0; i<webTechs.length-1; i++) {
  if(webTechs[i].length > webTechs[biggestIndex].length){
    biggestIndex = i;
  }
}

console.log(webTechs[biggestIndex])


console.log(webTechs.sort((a, b) =>{
  // ASC  -> a.length - b.length
  // DESC -> b.length - a.length
  return b.length - a.length;
}));

console.log(webTechs[0])

let techs = [];
// Use the webTechs array to create the following array of arrays:
for(let i =0; i<webTechs.length-1; i++) {
  techs.push([webTechs[i], webTechs[i].length])
}
console.log(techs);


let acronym = []
for(let i =0; i<mernStack.length; i++) {
  acronym.push(mernStack[i][0].toUpperCase())
}

console.log(acronym.join(''))

// iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
let someTech = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

for(let i = 0; i < someTech.length; i++) {
  console.log(someTech[i])
}

let fruits =  ['banana', 'orange', 'mango', 'lemon'];
for(let i = fruits.length; i > 0; i--) {
  console.log(fruits[i-1])
}

// Print all the elements of array as shown below.
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

for (let i = 0; i < fullStack.length; i++) {
  for (let j = 0; j < fullStack[i].length; j++) {
    console.log(fullStack[i][j])
  }  
}



// Copy countries array(Avoid mutation)
// const copiedCountries = [...countries];


// const copiedCountries = countries.slice();
// console.log(copiedCountries)

const copiedCountries = [];
for (let i = 0; i < countries.length; i++) {
  copiedCountries.push(countries[i]);
}

console.log(copiedCountries)



// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
const sortedCountries = [...copiedCountries];
sortedCountries.sort();
console.log(sortedCountries)

// Sort the webTechs array and mernStack array
const sortedWebTechs = [...webTechs];
sortedWebTechs.sort();

const sortedMernStack = [...mernStack];
sortedMernStack.sort();

console.log(sortedWebTechs);
console.log(sortedMernStack);


// Extract all the countries contain the word 'land' from the countries array and print it as array
let countriesWithLand = [];
for (let i = 0; i < countries.length; i++) {
  if(countries[i].includes('land')){
    countriesWithLand.push(countries[i])
  }
}
console.log(countriesWithLand);

// Find the country containing the hightest number of characters in the countries array
let hightestNumberOfCharacters = 0;
let hightestNumberOfCharactersIndex = 0;

for (let i = 0; i < countries.length; i++) {
  if(countries[i].length > hightestNumberOfCharacters){
    hightestNumberOfCharacters = countries[i].length;
    hightestNumberOfCharactersIndex = i;
  }
}

console.log(hightestNumberOfCharacters);
console.log(hightestNumberOfCharactersIndex);
console.log(countries[hightestNumberOfCharactersIndex]);

// Extract all the countries contain the word 'land' from the countries array and print it as array
countriesWithLand = [];
for (let i = 0; i < countries.length; i++) {
  if(countries[i].includes('land')){
    countriesWithLand.push(countries[i])
  }
}
console.log(countriesWithLand);

// Extract all the countries containing only four characters from the countries array and print it as array
const countriesFourCharacters = [];
for (let i = 0; i < countries.length; i++) {
  if(countries[i].length == 4){
    countriesFourCharacters.push(countries[i])
  }
}
console.log(countriesFourCharacters);

// Extract all the countries containing two or more words from the countries array and print it as array
const countriesFourOrMoreWords = [];
for (let i = 0; i < countries.length; i++) {
  if(countries[i].split(' ').length >= 2){
    countriesFourOrMoreWords.push(countries[i])
  }
}
console.log(countriesFourOrMoreWords);

// Reverse the countries array and capitalize each country and stored it as an array

let reverseCountriesCapitalized = []

const copied = [...copiedCountries];

console.log(copied[0]);
console.log(copied[copied.length-1]);


for (let i = copied.length; i>0; i--) {
  reverseCountriesCapitalized.push(copied[i-1].toUpperCase())
}

console.log(reverseCountriesCapitalized);


console.log(reverseCountriesCapitalized[0]);
console.log(reverseCountriesCapitalized[reverseCountriesCapitalized.length-1]);
