const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');


const city = process.argv[2]


if (city) {
    geocode(city, (error, {lat, lng}) => {
        if (error) return console.log('Error: ', error);

        forecast(lat, lng, (error, {current, location}) => {
            if (error) return console.log('Error: ', error);

            console.log('Location: ', location.country,', ', location.region,', ', location.name)
            console.log('feelslike: ', current.feelslike, '℃ ', 'temperature: ', current.temperature, '℃ ');
        })
    });

}
