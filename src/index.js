const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send('Welcome');
});

app.get('/api/weather/:cc/:city', (req, res) => {
    res.send('weather');
});

app.listen(3000, () => {
    console.log('app is listening on port 3000');
})