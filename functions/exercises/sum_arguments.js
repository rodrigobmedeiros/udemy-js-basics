
// function to sum elements getting a lot of separated numbers or an array

function sum(...args) {
    const firstElement = args[0];
    if (Array.isArray(firstElement)) {
        args = [...firstElement];
    }
    return args.reduce((sum, current) => sum + current, 0);
}

const total = sum([1, 2, 3]);
console.log(total);