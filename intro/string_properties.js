
 const movie =  {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
 };

 function showProperties(obj) {
    for (let att in obj) {
        if (typeof obj[att] === 'string') {
            console.log(att, obj[att]);
        }
    }
 }

 showProperties(movie);