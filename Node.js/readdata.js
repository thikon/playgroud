var rd = require('fs');
var dataread = rd.readFileSync('data.txt','utf-8');

console.log(dataread);
console.log("Test read file");
