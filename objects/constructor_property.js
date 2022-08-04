
// Creating an object using a constructor function

function Circle(radius) {
    this.radius = radius;
}

let circle = new Circle(1);
console.log(circle);
console.log(circle.constructor);

let number = 2;
console.log(number);
console.log(number.constructor);

let firstName = 'Rodrigo';
console.log(firstName);
console.log(firstName.constructor);

let lastName = String('Medeiros');
console.log(lastName);
console.log(lastName.constructor);