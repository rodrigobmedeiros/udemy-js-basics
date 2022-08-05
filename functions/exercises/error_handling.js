    
try {
    const numbers = [1, 2, 2, 4, 5];
    let count = countOccurrences(numbers, 2);
    console.log('number of elements:', count);
}
catch(e) {
    alert(e);
}


function countOccurrences(arr, searchElement) {

    const e = Error('Input must be an array!');

    if (!Array.isArray(arr)) {
        throw e;
    }

    const occurrences = arr.filter(value => value === searchElement);
    return occurrences.length;
}

