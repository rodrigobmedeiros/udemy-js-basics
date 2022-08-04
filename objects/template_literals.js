
// template literals with ``

const name = 'Rodrigo';
const isDay = true;

const message = 
`Hi ${name},
Good ${isDay ? 'morning' : 'afternoom'}!

Thank you joining my mailing list.

Regards, 
Mosh`;

console.log(message);