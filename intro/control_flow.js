
// Hour
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm ans 6pm: Good afternoon!
// Otherwise: Good evening!

// if -- else if -- else
let hour = 10;

if (hour >= 6 && hour < 12) {
    console.log('Good morning!');
}
else if (hour >= 12 && hour < 18) {
    console.log('Good afternoon!');
}
else {
    console.log('Good evening!');
}


// switch case

let role = 'guest';

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;

    default:
        console.log('Unknown User');
}

// For Loop
for (let i = 0; i < 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// For loop using decrement
for (let i = 5; i > 0; i--) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// While loop
let i = 0;
while (i <= 5) {
    console.log('number', i);
    i++;
}

// Do-while
// main difference is that statments are executed at least once
// when comparing with while-loop
let j = 0;
do {
    console.log('number j', j);
    j++;
} while (j < 0);

// for in loop

const person = {
    name: 'rodrigo',
    age: 30
};
// use for in to loop through object's attributes
for (let att in person) {
    console.log(att, person[att]);
}

let names = ['rodrigo', 'alan', 'renata', 'ygor'];
// use for of loop to loop through array's items
for (let name of names) {
    console.log('name: ', name);
}