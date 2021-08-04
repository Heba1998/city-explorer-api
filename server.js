'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const getWeather = require('./modules/weather')
const app = express();
app.use(cors());
const getmovies = require('./modules/movies')
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Hello my name is Heba 🙈💛')
})

app.get('/weather', weatherHandler)
app.get('/weatherr', weatherHandler1)
app.get('/movies', getmovies)




function weatherHandler(req, res) {
    let { lat, lon } = req.query
    console.log(lat,lon);
    getWeather(lat,lon).then(result =>{
        res.send(result)
    })


}
function weatherHandler1(req, res) {
    res.send(weather)
}


app.get('*', errorHandler)

function errorHandler(error, response) {
    response.status(500).send('Internal Server Error');
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));