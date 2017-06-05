require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'))


app.get('/', (req, res) => (res.sendFile(path.resolve('public', 'index.html'))));

app.get('*', (req, res) => (res.sendFile(path.resolve('public', 'index.html'))));

app.use('/*', (req, res) => (res.sendFile(path.resolve('public', 'index.html'))));

app.listen(5000, (req, res) => {
	console.log("App running on port 5000");
});