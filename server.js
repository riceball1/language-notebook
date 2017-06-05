const dotenv = require('dotenv');
dotenv.load();

const express = require('express');
const app = express();
const path = require('path');

// import routes:
const auth = require('./server/routes/auth.js');
const api = require('./server/routes/api.js');

const { PORT, DATBASE_URL} = require('./server/database.js');

// middleware for parsing data:
const bodyParser = require('body-parser');


// require morgan to log information
const morgan = require('morgan');

// parse json and params in urls
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// logging information: 
app.use(morgan('common'));

app.use(express.static('public'))


// endpoints
app.use('/', auth);
app.use('/api', api);
app.use('/*', (req, res)=> (res.sendFile(path.resolve('public', 'index.html'))));

// start up server

app.listen(PORT, (req, res)=> {
	console.log("App running on port 5000");
});