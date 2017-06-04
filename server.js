require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname, +'/public'));

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve('public', 'index.html'));
// });

app.listen(5000, () => {
    console.log(`app is running on port 5000`);
})