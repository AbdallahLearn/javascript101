// Variables and data types
let firstName = 'John';
const age = 25;
var isStudent = true;

// Output to console
console.log(`Hello, ${firstName}`);
console.log(`Age: ${age}`);
console.log('Is student:', isStudent);

// Conditional statements
if (age >= 18) {
    console.log('You are an adult.');
} else {
    console.log('You are a minor.');
}

// Arrays
const fruits = ['apple', 'banana', 'orange'];
console.log('Fruits:', fruits);
console.log('First fruit:', fruits[0]);

// Loops
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

fruits.forEach((fruit) => {
    console.log(fruit);
});

// Functions
function greet(name) {
    console.log('Hello, ' + name + '!');
}

greet('Alice');

// Objects
const person = {
    name: 'John',
    age: 30,
    isStudent: false,
};

console.log('Person:', person);
console.log('Name:', person.name);

// Object methods
const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
};

console.log('Add:', calculator.add(5, 3));
console.log('Subtract:', calculator.subtract(5, 3));

