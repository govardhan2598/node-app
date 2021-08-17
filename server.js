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
  res.send('<h1 style="color:lime;">Govardhan A  Rajeshwarayya S  Aravind D  Gopi T  Yaswanth Y  SaiTeja A </h1> \n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
