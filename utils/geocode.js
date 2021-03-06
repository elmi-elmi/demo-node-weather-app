const request = require("postman-request");

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoic2hhaHJva2hlbCIsImEiOiJjbDBudmw3MDQxZ3UyM2NtOXdueG42bGpuIn0.9Lw-SlLxcWBj61EOcvRnYQ&limit=1`;
    request({url: url, json: true}, (error, response)=>{
        if(error) {
            callback('Unable accesses to mapbox service', undefined);
        }else if(!response.body.features.length){
            callback('Unable to find location. Please try again later', undefined);
        }else{
            const lat = response.body.features[0].center[1];
            const lng = response.body.features[0].center[0];
            callback(undefined,{lat,lng});
        }


    });

};

module.exports = geocode
