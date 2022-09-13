const moment = require('moment');
// https://www.npmjs.com/package/moment

let ahora = moment();

// console.log(ahora.toString());
console.log(ahora.format('YYYY/MM/DD - HH:mm'));
console.log(ahora.toString());
console.log(ahora.calendar())
console.log((ahora.creationData()))
