// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });


// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

//const tutorial = require('./tutorial'); // import
// console.log(tutorial.sum(1,1));
// console.log(tutorial.PI);
// console.log(new tutorial.SomeMathObject());

const EventEmitter = require('events');
const Person = require('./Emitter/Person');
const Basic = require('./Emitter/Basic')

