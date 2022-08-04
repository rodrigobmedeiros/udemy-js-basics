
// Here we talk about the dynamic nature of the objects
// It means that We can add attributes or methods any time we need

const circle = {
    radius: 10
}

console.log(circle);

circle.color = 'red';
circle.draw = function() {};

console.log(circle);

delete circle.draw;

console.log(circle);