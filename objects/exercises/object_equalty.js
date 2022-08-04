
let street = 'Leopoldo Miguez';
let city = 'Rio de Janeiro';
let zipCode = '22060-021';

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqual(address1, address2) {
    // Verify if objects have the same attributes.
    let isEqual = true;

    for (let prop in address1) {
        isEqual = isEqual && (address1[prop] === address2[prop]);
    }

    return isEqual;
}

function areSame(address1, address2) {
    // Verify if objects refers to same memory location.
    return address1 === address2;
}

let address1 = new Address(street, city, zipCode);
let address2 = new Address(street, city, zipCode);
let address3 = address1;

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address1, address3));
