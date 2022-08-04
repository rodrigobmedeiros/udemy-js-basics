

let x = 10;
let y = x;

x = 20;

console.log(x);
console.log(y);

let student_1 = {
    firstName: 'Rodrigo',
    age: 18
};

let student_2 = student_1;

student_1.age++;

console.log(student_1);
console.log(student_2);

// testing functions

let value = 10;
let obj = {
    value: 10
};

function updateValue(value) {
    value;
}

function updateReference(obj) {
    obj.value++
}

updateValue(value);
updateReference(obj);

console.log('value: ', value);
console.log('reference: ', obj);