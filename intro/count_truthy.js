
const arr = [0, null, undefined, '', 2, 3];

function countTruthy(arr) {
    let count = 0;
    for (let value of arr) {
        if (value) count++;
    }

    return count;
}

console.log(countTruthy(arr));