// In JS usually use single quote to define strings (although it's possibble to use double quote too)
// We can use var to define variables but because ES6 it's better to use let instead.
let username = 'rodrigo';
console.log(username);

// how to name variables in JS
// Cannot be a reserved keyword
// Should be meaningful and descriptive
// Cannot start with a number
// Cannot contain a space or hyphen (-)
// Convension: Camel case: First word lower case and upper case for other words. Ex: firstName
// Are case-sensitive: firstName != FirstName
// Best Practice: define one variable per line of code

let lastName;

// const definition: when I use this keyword, you can't change the value
// in other points

const interestRate = 0.3;
// If I try to change
// I got an error
console.log(interestRate);

let firstName = 'rodrigo'; // string literal
let age = 36; // number literal
let isApproved = false; // boolean literal
let adress = undefined; // It's not so used because when you use let without a value the default is to be undefined
let selectedColor = null; // Mark variable as empty

let typeFistName = typeof firstName;
console.log(typeFistName);

// objects in JS
let person = {
    'name': 'rodrigo',
    'age': 36
};

console.log(person);
console.log(person.name);
console.log(person.age);

// it's possible to use bracket notation too -> [] (like dicts in python)
// Use bracket notation or dot notation depends on situation
// Me, Rodrigo think dot notation more elegant.
person['name'] = 'ygor';
console.log(person.name);

// Arrays
let selectedColors = ['red', 'green'];
console.log(selectedColors);
console.log(selectedColors[0]);

selectedColors[4] = 'blue';
console.log(selectedColors);
console.log(selectedColors.length)

// Cool - I've already know this behavior because of PML language =D
let marketList = [];
marketList[99] = 'rice';

console.log(marketList);

// Performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

// Calculating a value
function square(number) {
    return number * number;
}

greet('Rodrigo');
greet('Rodrigo', 'Medeiros');

let number = square(2);
console.log(number);

let x = 10;
let y = 3;

console.log('sum', x + y);
console.log('diff', x - y);
console.log('mult', x * y);
console.log('div', x / y);
console.log('pow', x ** y);
console.log('rest', x % y);

// Increment (++)
// Use ++ operator to increment the number
// used before, increment before other operations
// used after, increment after other operations
// Decrement is the same but using (--)

console.log(x++);
console.log(x);

// Interesting part here when talk about assignment operators
//  JS lets us do things like +=, -=, *=...

let value = 5;
value += 5;

console.log(value);

// Comparison operators =D
// Relational operators
console.log(value > 9);
console.log(value >= 10);
console.log(value < 10);
console.log(value <= 10);

// Equality operator
console.log(value === 10);
console.log(value !== 10);

console.log(10 == '10');

// Ternary operators
// If a customer has more than 100 points, 
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.
let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);

// Logical AND (&&)
// Return true comparing two boolean expressions
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE
let condA = false;
let condB = true;
let combinationOfConditions = condA || condB;
console.log(combinationOfConditions);

// NOT (!)
// invert the boolean expression
let applicationRefused = !eligibleForLoan;
console.log(applicationRefused);

// real-world example
let userColor = '';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

// you can easily define default values.

console.log(currentColor);

// BitWise Operators

// 1 = 00000001 ( 8 bits - 1 byte )
// (|) - bitwise OR
console.log(1 | 2);
// bitwise AND
console.log(1 & 2);

// Read, Write and Execution
// 00000100 - Read
// 00000110 - Write 
// 00000111 - Read, Write and execution

const readPermission = 4; // 00000100
const writePermission = 2; // 00000010
const executePermission = 1; // 00000001

// Use each binary representation to define permission
// Use | (OR) operator to add permissions
let myPermission = 0;
myPermission = myPermission | writePermission;

console.log(myPermission);

// Use & (AND) operator to verify if for example an user has the permission
let message = (myPermission & writePermission) ? 'yes': 'no';
console.log(message);

x = 10;
y = x++;
y;
console.log(y)