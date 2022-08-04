
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by 3 and 5 => FizzBuzz
// not divisible by 3 and 5 => number itself

function fizzBuzz(input) {
    return ((input % 3 === 0) && (input % 5 === 0)) ? 'FizzBuzz' : 
        (input % 3 === 0) ? 'Fizz' :
        (input % 5 === 0) ? 'Buzz' : 
        ((typeof input) === 'number') ? input :
        NaN;
}

const output = fizzBuzz('rodrigo');
console.log(output);