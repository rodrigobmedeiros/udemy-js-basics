
// Object Literal Syntax

let blogPost = {
    title: 'Voces precisam conhecer as namedtuples',
    body: `Texto do Blog`,
    author: 'Rodrigo Bernardo Medeiros',
    views: 103,
    comments : [
        {
            author: 'Renata Teixeira de Pontes',
            body: 'Texto do comentario'
        },
        {
            author: 'Isabella de Pontes',
            body: 'Outro Texto de comentario'
        }
    ],
    isLive: true
}

for (let att in blogPost) {
    console.log(att, blogPost[att]);
}