const express = require('express');
const axios = require('axios');

const app = express();


app.get('/', (req, res) => {
    res.send('Welcome');
});

app.get('/api/weather/:cc/:city', (req, res) => {
    // res.send('weather');
    const { cc, city } = req.params;
    axios
        .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city},${cc}&APPID=64bfcade25a3891088c755f505757b7f`
        )
        .then(response => {
            res.send(response.data);
        })
        .catch(err => console.log(err));
    /*
    openweathermap doc: https://openweathermap.org/api 
    -> Current weather data: Api doc 
    -> By city name: API call: api.openweathermap.org/data/2.5/weather?q={city name},{country code}
    */
});

app.listen(3000, () => {
    console.log('app is listening on port 3000');
})