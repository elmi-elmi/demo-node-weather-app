// weather - app
// alireza elmi

/*

const request = require('postman-request');
const url = 'http://api.weatherstack.com/current?access_key=64c6b202da959510c25e3150a925a0c3&query=37,-122&units=m'
request({url:url, json:true}, (error, response)=>{
    const current =response.body.current;
    const location = response.body.location;

    const outputText = `The weather is ${current.weather_descriptions[0]}. It is
    currently ${current.temperature} C. Its feels like ${current.feelslike}.`;

    console.log(outputText)

})
// It is currently 7 degress out. Its feels like 6 degress out.
*/

const request = require('postman-request');

const url_geo = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2hhaHJva2hlbCIsImEiOiJjbDBudmw3MDQxZ3UyM2NtOXdueG42bGpuIn0.9Lw-SlLxcWBj61EOcvRnYQ&limit=1';

request({url:url_geo,json:true},(error,response)=>{
    console.log(response.body)
    const {geometry} = response.body.features[0]
    console.log(geometry)
    console.log(geometry.coordinates)
})

