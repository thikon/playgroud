const EventEmitter = require('events');

class Person extends EventEmitter{
    constructor(firstname,lastname){
       super();
       this._firstname = firstname;
       this._lastname = lastname;
   }

   get firstname(){
       return this._firstname;
   }

   get lastname(){
       return this._lastname;
   }

   get fullname(){
       return this._firstname + ' ' + this._lastname;
   }
}

let name1 = new Person('Thitikorn','V.');
let name2 = new Person('Hello','World');

name1.on('registration', () => {
    console.log('My name is ',name1.fullname);
});

name2.on('registration',()=>{
    console.log('Sample wording',name2.fullname);
});

name1.emit('registration',name1);
name2.emit('registration',name2);