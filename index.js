const request = require('request');
const argv = require('yargs').argv;

let apiKey = '3fdffea70bf588e43b0293a1af2c734b';
let city = argv.c || 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
  	let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!` ;
    console.log(message);
  }
});


