const numbers = [5, 4, 3, 2, 1];
const max = getMax([1]);
console.log(max);

function getMax(arr) {
    if (arr.length === 0) return;
    if (arr.length === 1) return arr[0];

    arr.sort();
    return arr.pop();
}