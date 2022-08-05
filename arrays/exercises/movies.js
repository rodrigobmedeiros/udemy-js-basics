
const movies = [
    { title: 'a', year: 2018, rating: 4.5},
    { title: 'b', year: 2018, rating: 4.7},
    { title: 'c', year: 2018, rating: 3},
    { title: 'd', year: 2017, rating: 4.5},
];

movieNames = movies
    .filter(value => value.rating > 4 && value.year ===2018)
    .sort(function(a, b) {
        if (a.rating > b.rating) return -1;
        if (a.rating < b.rating) return 1;
        return 0;
    })
    .map(value => value.title);

console.log(movieNames);