var rd = require('fs');

rd.readFile('data.txt','utf-8',function(error,content){
    console.log(content)
});

console.log("Test read file");