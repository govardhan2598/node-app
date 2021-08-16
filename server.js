'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1 style="color:red;">Hello IdeyaLabs Devops Team</h1> \n');
});

app.get('/Team', (req, res) => {
  res.send('<h1 style="color:blue;">Govardhan A \n Rajeshwarayya S \n Aravind D \n Gopi T \n Yaswanth Y \n Sai Teja A </h1> \n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
