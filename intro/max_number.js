
function getMaxNumber(numA, numB) {
    if (numA >= numB) return numA;
    else return numB;
}

function getMaxNumberAlternative(numA, numB) {
    return (numA >= numB) ? numA : numB;
}

let result = getMaxNumberAlternative(2, 7);
console.log(result);