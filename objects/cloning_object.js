

// First way to clone an object

let circle = {
    color: 'red',
    radius: 1,
    draw() {
        console.log('draw');
    }
};

let copyCircle = {};

for (let att in circle) {
    copyCircle[att] = circle[att];
}

console.log('original: ', circle);
console.log('copy: ', copyCircle);

// Second way to copy objects.
// Copying this way, actually I can combine objects.
let copySecondWay = Object.assign({}, circle);
console.log('copy second way: ', copySecondWay);

// Third way to copy objects.
// Spread operator.
let copyThirdWay = { ...circle };
console.log('copy third way: ', copyThirdWay);