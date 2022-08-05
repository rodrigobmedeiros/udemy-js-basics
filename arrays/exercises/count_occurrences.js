
const numbers = [1, 2, 3, 4, 1];
let count = countOccurrences(numbers, 2);
console.log(count);

count = countOccurrencesOther(numbers, 2);
console.log(count);

function countOccurrences(arr, searchElement) {
    const occurrences = arr.filter(value => value === searchElement);
    return occurrences.length;
}

function countOccurrencesOther(arr, searchElement) {
    return arr.reduce(
        (accumulated, current) => {
            if (current === searchElement) {
                return accumulated + 1;
            }
            return accumulated;
        }, 0
    );
}