require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.sendFile('index.html');
})


app.listen(5000, () => {
    console.log(`app is running on port 5000`);
})