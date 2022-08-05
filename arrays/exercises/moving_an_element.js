
const numbers = [1, 2, 3, 4];
const output = move(numbers, 0, 4);
console.log(output);

function move(arr, index, offset) {
    const output = [...arr];
    const value = output[index];
    const length = output.length;
    output.splice(index, 1);

    if (index + offset < 0 || index + offset > length - 1) {
        console.error('Invalid Offset');
        return undefined;
    }

    output.splice(index + offset, 0, value);
    return output;
}