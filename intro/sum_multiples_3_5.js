
function sum_multiples_3_5(limit) {
    let total_sum = 0;

    for (let num = 0; num <= limit; num++) {
        if ((num % 3 === 0) || (num % 5 === 0)){
            total_sum += num;
        }
    }

    return total_sum;
}

console.log(sum_multiples_3_5(10));