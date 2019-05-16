/* run onnode.js version 7.10 */
/* reference site : https://github.com/bakatest-me/nodejs-callback-promise-async-await */

const axios = require('axios'); //use package "npm i axios -S"
var instance = axios.create({baseURL: 'https://unsplash.it/'});

async function getData() {
    return await instance.get('/list');
}

async function main() {
    try {
         let result = await getData();
         console.log('BAKA result',result.data.length);
    } catch (error) {
         console.log('case error',error.code);
    }
 }

 main();