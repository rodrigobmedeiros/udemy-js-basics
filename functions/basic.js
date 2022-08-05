
//  How to declare a function in JS?
// Two ways

// Function declaration
function walk() {
    console.log('walk');
}

// Anonymous (or Named) Function Expression
let run = function() {
    console.log('run');
};

run();

// The difference is that when you use function declaration you can call
// the function before its declaration.
// the engine that runs JS, makes a process of hoiting it means deslocate all
// declarions to the beginning of thet document.
// The same thing doesn`t occurs when you use function expressions
// if you try to call the function before, you`ll raise an error.

// ARGUMENTS

// Man, let think about this crazy thing here
// In JS each function has an propery called arguments so you can
// access directly the arguments without the formal definition on the
// function declarion. Let`s see how it works.

function sum() {
    for (let value of arguments) {
        console.log(value);
    }
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// It means you can pass more or less parameters than the function
// requires and aeverything will still work.

// THE REST OPERATOR

// Rest operator: ... these three points, the same of spread operator
// But in this case you use to get all inputs and alocate inside an array
// More or less the same idea of * in python.

// Let`s suppose that I want to sum all inputs so lets see it into a function
// cleaner and more professional.
function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2));

// rest parameter must be the last one in a function definition.

// DEFAULT VALUES
// Some tricks how to pass default values

function defaultParameters(a, b=10, c=10) {
    return a + b + c;
}

// I can pass only a and use default parameters
console.log(defaultParameters(1));

// I can pass the first and the second value and use the default for the
// third one
console.log(defaultParameters(1, 2));

// If I don`t pass the first parameter I`ll get NaN
// because the value enter as undefined
console.log(defaultParameters());

// As best practice parameters with default values are included at the end
// of the function definition.

// GETTERS AND SETTERS
// getters => access properties
// setters => change (mutate) them

// How to do that?
// Lets learn.

const person = {
    firstName: 'Rodrigo',
    lastName: 'Medeiros',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }

}

console.log(person.fullName);
person.fullName = 'Renata Teixeira';
console.log('first name: ', person.firstName);
console.log('last name', person.lastName);

// TRY AND CATCH
// I just adjust the object above to treat erros.
const person2 = {
    firstName: 'Rodrigo',
    lastName: 'Medeiros',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');

        if (parts.length !== 2) {
            let e = new Error('Enter only one name + one last name');
            throw e;
        }
        this.firstName = parts[0];
        this.lastName = parts[1];
    }

}

// try {
//     person2.fullName = 'Rodrigo Bernardo Medeiros';
// }
// catch (e) {
//     alert(e);
// }

// Local x Global Scope
// Variables are accessible only in the block where it`s inside.

// var x lel/const

// var => create function-scoped variables
// ES6 (ES2015): let, const => create block-scoped variables

// Beside that, there is the window object, an unique centered object
// with a lot of informations, attributes and so on.
// When you define variables using var, you attach this variable as an
// attribute of window object -> Bad practice
// Same thinj when you create a function.

// this KEYWORD

// when you are in a method (function inside objects) -> this refers to object
// when you are in a function -> this refers to (window (browsers), global(node)).

// Approach passing this
// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         this.tags.forEach(function(tag) {
//             console.log(this.title, tag);
//         }, this);
//     }
// };

// Interesting that this inside the function refers to window object
// To correct get the video object I have to pass the argument this
// But there are function that you can't pass this
// So, lets see how to solve it.

// will show the obj


function playVideo() {
    console.log(this);
}

// Approach using self
// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         // here this is still the video object
//         const self = this;
//         this.tags.forEach(function(tag) {
//             console.log(self.title, tag);
//         });
//     }
// };

// Approach using bind()
// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {

//         this.tags.forEach(function(tag) {
//             console.log(this.title, tag);
//         }.bind(this));
//     }
// };

// Approach using arrow function
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
};

// Arrow function pass the reference to the internal function.

video.showTags();