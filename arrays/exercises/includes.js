
const numbers = [1, 2, 3, 4];
console.log(includes(numbers, 1));
console.log(includesOther(numbers, 1));

// Solution 1
function includes(arr, searchElement) {
    for (let value of arr) {
        if (value === searchElement) return true;
    }
    return false;
}

// Solution 2
function includesOther(arr, searchElement) {
    return arr.some(value => value === searchElement);
}