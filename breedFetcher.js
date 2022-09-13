/*eslint linebreak-style: ["error", "windows"]*/

const request = require('request');
const fileArgs = process.argv.slice(2);
const urlAddress = 'https://api.thecatapi.com/v1/breeds/search?q=';
const breed = fileArgs[0];
const { exit } = require('process');


const body1 = request(urlAddress.concat(breed.slice(0,4)), (error, response, body) => {
  if (error) {
    console.log('error:', error);
    exit(0);
  }
   
  if (response.statusCode < 200 || response.statusCode > 299) {
    console.log("download error, please check url or retry");
    exit(0);
  } else {
    const data = JSON.parse(body);
    const result = data[0] ? data[0].description : "breed not found!";
    console.log(result);
  }
});
