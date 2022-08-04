
function showStars(height) {
    let numberOfStars = '*';
    for (let i =  1; i <= height; i++) {
        console.log(numberOfStars);
        numberOfStars += '*';
    }
}

showStars(5);