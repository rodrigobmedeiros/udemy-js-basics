
const marks = [80, 80, 80];

// Average = 70
// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90 - 100: A

function calculateGrade(marks) {
    
    avgMarks = calculateAverarage(marks);
    grade = getGrade(avgMarks);
    return grade;
}

function calculateAverarage(array) {
    let sum = 0;

    for (let num of array) {
        sum += num;
    }

    let avgGrade = sum / array.length;
    return avgGrade;
}

function getGrade(avgMark) {
    if (avgMark < 60) return 'F';
    if (avgMark < 70) return 'D';
    if (avgMark < 80) return 'C';
    if (avgMark < 90) return 'B';
    return 'A';
}

console.log(calculateGrade(marks));