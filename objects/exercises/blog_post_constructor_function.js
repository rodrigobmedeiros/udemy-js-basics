
function BlogPost(title, body, author, view, comments, isLive) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.view = view;
    this.comments = comments;
    this.isLive = isLive;
}

function Comment(author, body) {
    this.author = author;
    this.body = body;
}

let comments = [
    ['rodrigo', 'texto'],
    ['renata', 'texto'],
    ['isabella', 'texto']
];

// Use constructor to build a list of Comments objects
for (let idx in comments) {
    comments[idx] = new Comment(
        comments[idx][0],
        comments[idx][1]
    );
}

let title = 'Voces precisam conhecer as namedtuples';
let body = 'Texto do Blog';
let author = 'Rodrigo Bernardo Medeiros';
let views = 103;
let isLive = true;

let blogPost = new BlogPost(
    title,
    body,
    author,
    views,
    comments,
    isLive
);

console.log(blogPost);

// I did the construction considering all need to define a blog post.
// But Mosh made it simple considering some default attibuites.
// As follows:

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let post = new Post('Como viajar', 'Texto do post', 'Rodrigo');
console.log(post);

