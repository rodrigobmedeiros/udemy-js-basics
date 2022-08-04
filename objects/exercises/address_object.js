
// street
// city
// zipCode
// showAddress

let street = 'Leopoldo Miguez, 29';
let city = 'Rio de Janeiro';
let zipCode = '22060-021';

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function createAddress(street, city, zipCode) {
    return {
        street, 
        city, 
        zipCode
    };
}

let address = new Address(street, city, zipCode);
let address2 = createAddress(street, city, zipCode); 

function showAddress(address) {
    for (let att in address) {
        console.log(att, address[att]);
    }
}
console.log('Constructor:');
showAddress(address);
console.log('');
console.log('Factory:');
showAddress(address2);
