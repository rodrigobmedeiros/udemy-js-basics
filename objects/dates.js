
// Different ways to create dates in JS
// Create date with current time and date
// By default Tue Aug  02 2022 06:57:03 GMT-0300 (Brazilian Standard Time)
let now = new Date(); 
let date1 = new Date('Aug 02 2010 06:57:03');
let date2 = new Date(year=1986, month=4, date=30)

console.log(now);
console.log(date1);
console.log(date2);

console.log(date2.toString());
console.log(date2.toDateString());
console.log(date2.toTimeString());
console.log(date2.toISOString());