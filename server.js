'use strict';
 
require('dotenv').config();
const express = require('express'); 
const weatherData = require('./data/weather.json');
const cors = require('cors');
const server = express();
const PORT = process.env.PORT;
server.use(cors());
server.get('/', (request, response) => {
    let str = 'hello I am Heba 💛🙈';
    response.status(202).send(str);
})


server.get('/test', (req, res) => {
    res.send('test Weather Data')

})


server.get('/weather', (req, res) => {
    let weatherCityData = req.query.city_name;
    let weatherCity = weatherData.find(city => {
        if (city.city_name.toLowerCase()==weatherCityData.toLowerCase()) {
            return city

        }

    });
    console.log(weatherCityData)



let foccasrtDataArr= weatherCity.data.map(item=>{
    return new Forecast(item)
})
res.send(foccasrtDataArr)
})

class Forecast {
    constructor(arr) {

        this.date = arr.valid_date
        this.descrption = arr.weather.description;       


    }
}


server.get('*', (req, res) => {
    res.status(404).send('not found');
})

 
server.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
})