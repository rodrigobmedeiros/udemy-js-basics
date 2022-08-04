
// Factory Function
 function createCircle(radius) {
    return {
        radius, // modern JS: if a key and a variable have the same name, I can put once.
        draw() { // dont need keyword function.
            console.log('draw');
        }
    };
 }

 const circle1 = createCircle(1);
 const circle2 = createCircle(2);

console.log(circle1);
console.log(circle2);