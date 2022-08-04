
// Define objects to show certain properties in the website

let priceRanges = [
    { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
    { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
    { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 }
];

// Considering the restaurant property, I define each object use

function getPrice(restaurant, priceRanges) {
    for (let priceRange of priceRanges){
        if ((restaurant.averagePerPerson >= priceRange.minPerPerson) && (restaurant.averagePerPerson <= priceRange.maxPerPerson)) {
            return priceRange;
        }
    }
}

let restaurants = [
    { averagePerPerson: 25}
];

console.log(getPrice(restaurants[0], priceRanges));