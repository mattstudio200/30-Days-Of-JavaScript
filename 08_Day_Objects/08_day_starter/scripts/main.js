// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/08_Day_Objects/08_day_objects.md


// play with scope
// var, let and const what is the difference

// const person = {}

// const rectangle = {
//     length: 20,
//     width: 20
//   }
// console.log(rectangle)

// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ],
//     getFullName: function() {
//       return `${this.firstName} ${this.lastName}`
//     },
//     'phone number': '+3584545454545'
//   }
  
// // accessing values using .
// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.age)
// console.log(person.location)
// console.log(person.getFullName())
// console.log(person['firstName'])
// console.log(person['lastName'])
// console.log(person['age'])
// console.log(person['age'])
// console.log(person['location']) // undefined

// console.log(person['phone number'])


// const copyPerson = Object.assign({}, person)
// console.log(copyPerson)

// const keys = Object.keys(copyPerson)
// console.log(keys)

// const entries = Object.entries(copyPerson)
// console.log(entries)

// console.log(copyPerson.hasOwnProperty('name'))
// console.log(copyPerson.hasOwnProperty('score'))


// Create an empty object called dog

const dog = {};


// Print the the dog object on the console

console.log(dog);

// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'Nut';
dog.legs = 4;
dog.color = 'ginger';
dog.age = 13;
dog.bark = function() {
    return 'woof woof';
}

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }






// Get name, legs, color, age and bark value from the dog object

console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())
// Set new properties the dog object: breed, getDogInfo
dog.breed = 'Jack russel'
dog.getDogInfo = function() {
    return this.breed
}

console.log(dog.getDogInfo())


// Find the person who has many skills in the users object.

const userNames = Object.keys(users);
let mostSkilled = userNames[0];
for(let i = 0; i < userNames.length; i++) {

    const name = userNames[i];

    if (users[name].skills.length > users[mostSkilled].skills.length) {
        mostSkilled = name
    }

}

console.log(users[mostSkilled])

let leastSkilled = userNames[0];
for(let i = 0; i < userNames.length; i++) {

    const name = userNames[i];

    if (users[name].skills.length < users[leastSkilled].skills.length) {
        leastSkilled = name
    }
}

console.log(users[leastSkilled])

// Count logged in users, count users having greater than equal to 50 points from the following object.
let numberOfLoggedInUsers = 0;

for(let i = 0; i < userNames.length; i++) {
    if(users[userNames[i]].isLoggedIn && users[userNames[i]].points >= 50) {
        numberOfLoggedInUsers += 1; 
    }
}

console.log(numberOfLoggedInUsers);

// Find people who are MERN stack developer from the users object
const mernDevelopers = {};
for(let i = 0; i < userNames.length; i++) {
    const user = users[userNames[i]];

    if (user.skills.includes('MongoDB') &&
    user.skills.includes('Express') &&
    user.skills.includes('React') &&
    user.skills.includes('Node')) {
        // mernDevelopers.push(user);
        mernDevelopers[userNames[i]] = user;

    }
}

console.log(mernDevelopers)

// Set your name in the users object without modifying the original users object

const copyUsers = Object.assign({}, users)
console.log(copyUsers)
copyUsers['Matthew'] = {
    email: 'matthew@matthew.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
}

console.log(copyUsers)

// Get all keys or properties of users object
console.log(Object.entries(users))

// Get all the values of users object

console.log(Object.values(users))

// Use the countries object to print a country name, capital, populations and languages.

for(let i = 0; i < countries.length; i++) {
    console.log(`${countries[i]['name']}, ${countries[i]['capital']}, ${countries[i]['population']}, ${countries[i]['currency']}`)
    for(let j = 0; j < countries[i].languages.length; j++) {
        console.log(`${countries[i].languages[j]}`)
    }
}


// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
    firstName: 'Matthew',
    lastName: 'Shirtliffe',
    incomes: [],
    expenses: [],
    totalIncome: function() {
        let income = 0;
        for(let i=0; i< this.incomes.length; i++) {
            income += this.incomes[i].value;
        }

        return income
    },
    totalExpense: function() {
        let expenses = 0;
        for(let i=0; i< this.expenses.length; i++) {
            expenses += this.expenses[i].value;
        }

        return expenses;
    },
    accountInfo: function() {
        return `${this.firstName} ${this.lastName}`
    },
    addIncome: function(income) {
        this.incomes.push(income)
    },
    addExpense: function(expense) {
        this.expenses.push(expense)
    },
    accountBalance: function() {
        return this.totalIncome() - this.totalExpense()
    },
}

personAccount.addIncome({value: 1000, description: 'rental'});
personAccount.addIncome({value: 1500, description: 'rental2'});
personAccount.addIncome({value: 500, description: 'saas1'});
personAccount.addIncome({value: 500, description: 'saas2'});

personAccount.addExpense({value: 800, description: 'rent'});
personAccount.addExpense({value: 500, description: 'bills'});
personAccount.addExpense({value: 500, description: 'leasuire'});

console.log(personAccount.totalExpense())
console.log(personAccount.totalIncome())
console.log(personAccount.accountInfo())
console.log(personAccount.accountBalance())

const userss = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

// Imagine you are getting the above users collection from a MongoDB database. 
// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the application

function signUp (username, email, password) {

    for(let i = 0; i < userss.length; i++) {
        if(userss[i].username === username) {

            return 'user already an account';
        }
    }

    const characters = 'abcdefghijklmnopqrstuvwxyz';

    const getRandInclusive = (max, min) => Math.floor(Math.random() * (max - min + 1) + min)

    let userId = '';
    for (let j = 0; j < 6; j++) {
        userId += characters[getRandInclusive(0, characters.length)];
    }
    const newUser = {_id: userId, username: username, email: email, password: password, createdAt: new Date(), isLoggedIn: false}
    userss.push(newUser);
    return 'account created';
    
}


function signIn(email, password) {

    let user = null;
    for(let i = 0; i < userss.length; i++) {
        if(userss[i].email === email) {
            user = userss[i];
            break;
        }
    }

    if(!user) {
        return 'user not found'
    }
    
    if(user.password === password) {
        user.isLoggedIn = true;
        return 'user loggedin'
    }else{
        return 'wrong password'
    }

}



console.log(signUp('Alex', 'email', '1234'));
console.log(signUp('Matthew', 'matthew@matthew.com', '1234'));

console.log(signIn('matthew@matthew.coms', '1234'))
console.log(signIn('matthew@matthew.com', '123'));
console.log(signIn('matthew@matthew.com', '1234'));

// The products array has three elements and each of them has six properties. 
// a. Create a function called rateProduct which rates the product 
// b. Create a function called averageRating which calculate the average rating of a product

function rateProduct(user, productId, rating) {

    for(let i = 0; i < products.length; i++) {
        if(productId == products[i]._id) {
            products[i].ratings.push({ userId: user._id, rate: rating })
        }
    }

}

function averageRating() {
    let sum = 0;
    let numberOfRatings = 0
    for(let i = 0; i < products.length; i++) {
        for(let j = 0; j < products[i].ratings.length; j++) {
            sum += products[i].ratings[j].rate
            numberOfRatings += 1
        }
    }

    console.log(sum)
    console.log(numberOfRatings)

    return (sum / numberOfRatings).toFixed(2);

}

// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeProduct(user, productId) {

    for(let i = 0; i < products.length; i++) {
        if(productId = products[i]._id) {
            if(!products[i].likes.includes(user._id)) {
                products[i].likes.push(user._id)
            } else {
                let pos =  products[i].likes.indexOf(user._id)
                products[i].likes.splice(pos, 1)
            }
            
        }
    }
}

const user = userss[userss.length-1];
console.log(user)

rateProduct(user, 'aegfal', 8)
console.log(products)

console.log(averageRating())

likeProduct(user, 'hedfcg')
likeProduct(user, 'hedfcg')

console.log(products)


const characters = '123456789';

const getRandInclusive = (max, min) => Math.floor(Math.random() * (max - min + 1) + min)

let userId = [];
while(userId.length != 6){
    const val = characters[getRandInclusive(0, characters.length)]
    
    if(!userId.includes(val)) {
        userId.push(val);
    }
    
}

console.log(userId.join())