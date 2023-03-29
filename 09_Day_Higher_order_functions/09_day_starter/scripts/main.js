console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/09_Day_Higher_order_functions/09_day_higher_order_functions.md

// Higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.

// const timeout = 1000;
// // let i = 0
// function sayHello() {
//     // i +=1;
//     console.log(new Date())
//   }
// setInterval(sayHello, 1000)


// const duration = 2000;
// function callback() {
//     alert('Later')
// }
// setTimeout(callback, duration)


let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num))

numbers.forEach(num => sum += num)
console.log(sum)

countries.forEach((country) => console.log(country.name.toUpperCase()))
countries.forEach((value, index) => console.log(`index: ${index} value: ${value.name}`))
countries.forEach((value, index, array) => console.log(`index: ${index} value: ${value.name} ${array[index].name}`))

let numCallbackRuns = 0;
countries.forEach(element => {
    console.log({ element });
    numCallbackRuns++;
  });

console.log({ numCallbackRuns });

// const items = ["item1", "item2", "item3"];
// const copyItems = [];

// // before
// for (let i = 0; i < items.length; i++) {
//   copyItems.push(items[i]);
// }

// // after
// items.forEach((item) => {
//   copyItems.push(item);
// });


// console.log(copyItems)

// const modifiedArray = arr.map(function (element, index, arr) {
//     return element
// })

// 
const countriesNames = countries.map(function (element, index, arr) {
    return element.name
})

console.log(countriesNames)

const someNumbers = [1, 2, 3, 4, 5]

const square1 = (num) => num * num
const square2 = (num) => Math.pow(num, 2)
let numbersSquare = someNumbers.map(square1)
console.log(numbersSquare)
numbersSquare = someNumbers.map(square2)
console.log(numbersSquare)

const countriesNamesUppercase = countriesNames.map(function(country) {
    return country.toUpperCase()
})

countriesNamesUppercase.forEach(function(country) {
    console.log(country);
})

const countriesNamesLowercase = countriesNames.map(function(country) {
    return country.toLowerCase()
})

countriesNamesLowercase.forEach(function(country) {
    console.log(country);
})

const countriesContainingLand = countries.filter((country) =>
  country.name.includes('land')
)
console.log(countriesContainingLand)

const countriesEndsByia = countries.filter((country) => country.name.endsWith('ia'))
console.log(countriesEndsByia)

const countriesHaveFiveLetters = countries.filter(
    (country) => country.name.length === 5
  )
console.log(countriesHaveFiveLetters)


let tasks = [
    {title: 'wash', done: false},
    {title: 'brush teeth', done: false},
    {title: 'shave', done: true}

]
const doneTasks = tasks.filter(
    (task) => task.done
  )
console.log(doneTasks)


console.log('scoresGreaterEighty')
const scores = [
  { name: 'Asabeneh', score: 95 },
  { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log(scoresGreaterEighty)

// reduce
const somenumbers = [1, 2, 3, 4, 5]
const asum = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(sum)


// get more reduce examples

// every

const newnames = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = newnames.every((name) => typeof name === 'string') // Are all strings?

console.log(areAllStr)

const bunchOfNumbers = [2, 4, 6, 8, 10]
const allEven = bunchOfNumbers.every((n) => n % 2 === 0 ) 

console.log(allEven)

const answers = [true, true, true, true]
const allTrue = answers.every((el) => el === true ) 

console.log(allTrue)

// find

const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)


const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const result = names.find((name) => name.length > 7)
console.log(result)

// when to use filter vs find?


const names1 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages1 = [24, 22, 25, 32, 35, 18]

const result1 = names.findIndex((name) => name.length > 7)
console.log(result1) // 0

const age1 = ages.findIndex((age) => age < 20)
console.log(age1) // 5


const bools = [true, true, true, true]

const areSomeTrue = bools.some((b) =>  b === true)

console.log(areSomeTrue) //true


const numbersToSort = [9.81, 3.14, 100, 37]
// Using sort method to sort number items provide a wrong result. see below
console.log(numbersToSort.sort()) //[100, 3.14, 37, 9.81]
numbersToSort.sort(function (a, b) {
  return a - b
})

console.log(numbersToSort) // [3.14, 9.81, 37, 100]

numbersToSort.sort(function (a, b) {
  return b - a
})
console.log(numbersToSort) //[100, 37, 9.81, 3.14]

// Exercises 1
const exercise1Countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const exercise1Names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const exercise1Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const exercise1Products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]



// Use forEach to console.log each country in the countries array.
countries.forEach(country => console.log(country));

// Use forEach to console.log each name in the names array.
countries.forEach(country => console.log(country.name));

// Use forEach to console.log each number in the numbers array.
numbers.forEach(number => console.log(number));

// Use map to create a new array by changing each country to uppercase in the countries array.
const countriesUpperCase = countries.map(country => country.name.toUpperCase());
console.log(countriesUpperCase);

// Use map to create an array of countries length from countries array.
const countryNameLength = countries.map(country => country.name.length);
console.log(countryNameLength);

// Use map to create a new array by changing each number to square in the numbers array
const squareNumbers = numbers.map(number => Math.pow(number, 2));
console.log(squareNumbers);

// Use map to change to each name to uppercase in the names array
const namesUppercase = names.map(name => name.toUpperCase());
console.log(namesUppercase);

// Use map to map the products array to its corresponding prices.
const productPrice = products.map(p => {
    return {product: p.product, price: p.price}
});
console.log(productPrice);


// Use filter to filter out countries containing land.
const countriesWithLandInName = countries.filter(country => {
    if(country.name.includes('land')){
        return country
    }
});
console.log(countriesWithLandInName);


// Use filter to filter out countries having six character.
const countriesSixCharacters = countries.filter(country => {
    if(country.name.length === 6){
        return country
    }
});
console.log(countriesSixCharacters);

// Use filter to filter out countries containing six letters and more in the country array.

const countriesSixOrMoreCharacters = countries.filter(country => {
    if(country.name.length >= 6){
        return country
    }
});
console.log(countriesSixOrMoreCharacters);

// Use filter to filter out country start with 'E';

const countriesStartsWithE = countries.filter(country => {
    if(country.name.startsWith('E')){
        return country
    }
});
console.log(countriesStartsWithE);

// Use filter to filter out only prices with values.

const productsOnlyPricesWithValues = products.filter(product => {
    if(typeof product.price === 'number'){
        return product
    }
});
console.log(productsOnlyPricesWithValues);


// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(array) {
    return array.filter(arr => {
        if(typeof arr === 'string'){
            return arr
        }
    });
}

console.log(getStringLists([1, 2, 3, '4', '5', '6', '7', 8]))

// Use reduce to sum all the numbers in the numbers array.

const sumOfAll = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sumOfAll)

// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

const countriesSentence = countries.reduce((acc, cur) => {
    acc.push(cur.name)
    return acc;
}, []).join(',')
console.log(countriesSentence)

// Explain the difference between some and every

// Use some to check if some names' length greater than seven in names array
console.log(names.some(n => n.length > 7))

// Use every to check if all the countries contain the word land
console.log(countries.every(country => country.name.includes('land')))
console.log(countries.some(country => country.name.includes('land')))

// Explain the difference between find and findIndex.
// Use find to find the first country containing only six letters in the countries array
console.log(countries.find (country => {
    if(country.name.length == 6 ){
        return country
    }
}))

// Use findIndex to find the position of the first country containing only six letters in the countries array
console.log(countries.findIndex(country => {
    if(country.name.length == 6 ){
        return country
    }
}))

console.log(countries[6].name)
console.log(countries[6].name.length)

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const norwayIndex = countries.findIndex(country => {
    if(country.name == 'Norway' ){
        return country
    }
})

console.log(norwayIndex)
console.log(countries[norwayIndex].name)


// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const russiaIndex = countries.findIndex(country => {
    if(country.name == 'Russia' ){
        return country
    }
})

console.log(russiaIndex)

// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const pp = products.filter((product) => {
    if(typeof product.price === 'number'){
        return product
    }}).map(product => product.price).reduce((acc, cur) => acc + cur, 0)
console.log(pp)

// Find the sum of price of products using only reduce reduce(callback))


const ppp = products.reduce((acc, cur) => {
    typeof cur.price === 'number' && acc.push(cur.price)
    return acc
}, [])
console.log(ppp)

// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

function categorizeCountries(value) {

    return countries.filter(country => country.name.includes(value))
}

console.log(categorizeCountries('land'))
console.log(categorizeCountries('ia'))
console.log(categorizeCountries('island'))
console.log(categorizeCountries('stan'))

// Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
function startWithTimes(letter) {
    return countries.map(c => c).reduce((acc, cur) => {
        if(cur.name[0] === letter) {
            acc.push(cur)
        }
        return acc
    }, [])
}

console.log(startWithTimes('A'))


// Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array

function getFirstTenCountries() {
    return countries.reduce((acc, cur) => {
        if(acc.length < 10) {
            acc.push(cur)
        }
        return acc
    }, [])
}

console.log(getFirstTenCountries())



// Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
// function getLastTenCountries() {
//     return countries.filter((val, index) => {
//         if(index > countries.length-11) {
//             return val
//         }
//     })
// }

function getLastTenCountries() {
    return countries.reduceRight((acc, cur) => {
        if(acc.length < 10) {
            acc.push(cur)
        }
        return acc
    }, [])
}

console.log(getLastTenCountries())

// Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
// WOT?

// Use the countries information, in the data folder. Sort countries by name, by capital, by population
// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/09_Day_Higher_order_functions/09_day_higher_order_functions.md#exercises-level-3

// Sort countries by name, by capital, by population

const countriesSortedByName = [...countries];
countriesSortedByName.sort((a, b) => {if (a.name < b.name)  return -1})
console.log(countriesSortedByName);

const countriesSortedByCapital = [...countries];
countriesSortedByCapital.sort((a, b) => {if (a.capital < b.capital)  return -1})
console.log(countriesSortedByCapital);

const countriesSortedByPopulation = [...countries];
countriesSortedByPopulation.sort((a, b) => {if (a.population < b.population)  return -1})
console.log(countriesSortedByName);

// *** Find the 10 most spoken languages:

function mostSpokenLanguages(n) {

    const values = countries.map(country => country.languages).reduce((acc, cur) =>  {
        acc.push(...cur);
        return acc;
    },[]).reduce((acc,
        cur) =>  {
        return (
            acc[cur] ? ++acc[cur] : (acc[cur] = 1),
            acc
        );
    },{})

    return Object.keys(values).map(k => {

        return {
            country:k,
            count: values[k]
        }
    }).sort((a, b) => {if (a.count > b.count)  return -1}).reduce((acc, cur) => {
        if(acc.length < n) {
            acc.push(cur)
        }
        return acc
    }, [])
}

console.log(mostSpokenLanguages(10))

// *** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.