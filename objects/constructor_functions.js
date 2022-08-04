
// Constructor Function
// Another way to create objects in JS instead of use factories

// 1) How to give names to constructor functions?
// normally, we name functions using Camel notation, but for 
// constructor functions, we use Pascal notation.

// Camel Notation: oneTwoThree
// Pascal Notation: OneTwoThree

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(1);
console.log(circle);
circle.draw()