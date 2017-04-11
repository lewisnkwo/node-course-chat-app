const moment = require('moment');

// var date = new Date();
// console.log(date);

// let date = moment();
// date.add(1, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

new Date().getTime();
let someTimestamp = moment().valueOf();
console.log(someTimestamp);

let createdAt = 1234;
let date = moment(createdAt);
console.log(date.format('H:mm a'));
