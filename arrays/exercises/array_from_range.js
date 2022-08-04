//
let numbers = arrayFromRange(-10, -4);
console.log(numbers);
numbers = arrayFromRangeOther(-10, -4);
console.log(numbers);


function arrayFromRange(min, max) {
    let arr = [];
    let length = Math.abs(max - min);
    for (let idx = 0; idx <= length; idx++) {
        arr[idx] = min;
        min += 1;
    }
    return arr;
}

function arrayFromRangeOther(min, max) {
    let arr = [];
    for (let value = min; value <= max; value++) {
        arr.push(value);
    }
    return arr;
}