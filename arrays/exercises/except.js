
const numbers = [1, 2, 3, 4, 1, 1];
let output = except(numbers, [1, 2]);
console.log(output);
output = exceptOther(numbers, [1, 2]);
console.log(output);

function except(arr, excluded) {
    for (let value of excluded) {
        arr = arr.filter(number => number !== value);
    }
    return arr;
}

function exceptOther(arr, excluded) {
    const output = [];
    for (let value of arr) {
        if (!excluded.includes(value)) {
            output.push(value);
        }
    }
    return output;
}