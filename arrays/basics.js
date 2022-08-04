
// Adding elements to an array
const numbers = [3, 4];

// end
let lengthAfterPush = numbers.push(5, 6);
console.log(lengthAfterPush);
// beginning
let lengthAfterUnshift = numbers.unshift(1, 2);
console.log(lengthAfterUnshift);
console.log(numbers);

// middle
let lengthAfterSplice = numbers.splice(5, 0, 'add', 'end');
console.log(lengthAfterSplice);
console.log(numbers);

// ===========================================================
// Finding Elements (Primitives)
// ===========================================================

let numbers1 = [1, 2, 3, 4, 1];

console.log(numbers1.indexOf(1));
console.log(numbers1.indexOf(10));
console.log(numbers1.lastIndexOf(1));
console.log(numbers1.includes(1));

// ===========================================================
// Finding Elements (Reference)
// ===========================================================

console.log('');
console.log('Finding Elements (Reference)');
console.log('');

let courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'}
];

// find returns the objects or undefined
console.log(courses.find(function(course) { return course.name === 'a'}));
console.log(courses.find(function(course) { return course.name === 'xyz'}));

// findIndex is the same idea but returning the index or -1


// ===========================================================
// Arrow functions
// ===========================================================

// for simple statments I can just:
// parameter => some logic
// no parameter: () => some logic
// with more than 1 parameter: (a, b) => some logic
// with complex logic: (a, b) => { complex logic }
// include {} implies that I have to declare a return statment
console.log(courses.find( course => course.name === 'a'));
console.log(courses.find( course => {return course.name === 'a'}));


// ===========================================================
// removing Elements
// ===========================================================

// As inserting elements, you can remove from the end, beginning and middle.

console.log('');
console.log('Removing Elements');
console.log('');

const numbers2 = [1, 2, 3, 4, 5];

// END
let last = numbers2.pop();
console.log(last);
console.log(numbers2);

// BEGINNING
let first = numbers2.shift();
console.log(first);
console.log(numbers2);

// MIDDLE
let middle = numbers2.splice(1, 1);
console.log(middle);
console.log(numbers2);

// ===========================================================
// Emptying an Array
// ===========================================================
console.log('');
console.log('Removing Elements');
console.log('');

let numbers3 = [1, 2, 3, 4, 5, 6];
let another = numbers3;

// Solution 1
// The problem with this solution is that  you points the 
// old variable to a new empty array, but all old references are
// kept.
// numbers3 = [];

// Solution 2
// numbers3.length = 0;

// Solution 3
// numbers3.splice(0, numbers3.length);

// Solution 4
while (numbers3.length > 0) {
    numbers3.pop()
}

console.log(numbers3);
console.log(another);

// ===========================================================
// Combining and Slicing an Array
// ===========================================================
console.log('');
console.log('Combining and Slicing');
console.log('');

const firstArray = [1, 2, 3, { name: 'Rodrigo'}];
const secondArray = [4, 5, 6];

const combined = firstArray.concat(secondArray);

// To copy an array I can use slice with no parameters .slice()
const sliceCopy = combined.slice();

// To get a part of the array from an index to the end.
const slicePartial = combined.slice(3);

// To get a part of the array from an start index to an end index
// The end index is exclusive.
const slicePartialStartEnd = combined.slice(3, 5);

// Talking about reference type, the memory address is copied
// So if you change the first value, the combined value will be changed too.

firstArray[0] = 'Rodrigo';
firstArray[1] = 'Bernardo';
firstArray[3].name = 'Renata';
firstArray[3] = 'Renata';

console.log(combined);
console.log(sliceCopy);
console.log(slicePartial);
console.log(slicePartialStartEnd);

// The spread operator ...
// Similar to * in python (Remember to review this part)

let combinedSpread = [...firstArray, ...secondArray];
console.log('Combined Spread: ', combinedSpread);

// You can easily add new elements
combinedSpread = [...firstArray, 'a', ...secondArray, 'b'];
console.log('Combined Spread: ', combinedSpread);

// Iterating

let arrayzao = [1, 2, 3, 4, 5];

// Iterating over values
for (let value of arrayzao) {
    console.log(value);
}

// Iterating
for (let idx in arrayzao) {
    console.log(idx, arrayzao[idx]);
}

arrayzao.forEach(value => console.log(value));

arrayzao.forEach((value, index) => console.log(index, value));

// Joining arrays
// In python it's a string method, here it's an array method

console.log(arrayzao.join(', '));


// Sort Arrays
// primitives

let arrayToSort = [5, 4, 3, 9, 1, 2];

console.log(arrayToSort.sort());

// reference types
let arrayToSortReference = [
    { id: 1, name: 'Abelardo'},
    { id: 2, name: 'Rodrigo'},
    { id: 3, name: 'Zumira' },
    { id: 3, name: 'Lerdilan'}
]

console.log(arrayToSortReference.sort( function(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
}));

// Testing the elements of the array
// Two methods that works as all() or any() in python
// Verifying that all elements are true considering a certain criteria
// Or at least one element are true considering a certain criteria.

const positiveNumbers = [1, 2, 3, 4, 5];

const allPositive = positiveNumbers.every(value => value >= 0);
console.log('All numbers are positive? ', allPositive);

const negPosNumbers = [-1, 2, -2, 3, -3];
const atLeastOnePositive = negPosNumbers.some(value => value >= 0);
console.log('At least one positive? ', atLeastOnePositive);

// Filtering an array
const allNumbers = [-1, 1, -2, 2, -3, 3];
const onlyPositives = allNumbers.filter(value => value >= 0);
console.log('Only positives: ', onlyPositives);

// Mapping
const squareNumbers = allNumbers.map(value => value ** 2);
console.log('Squared numbers using Map: ', squareNumbers);

// Reducing an array
// A way to reduce an array to a single value
const numbersToSum = [1, -1, 3, 2];
const sum = numbersToSum.reduce( (accumulate, current) => accumulate + current );
console.log(sum);

// Modern way to do that
// How could I do it using python
// -> sum() - built in function