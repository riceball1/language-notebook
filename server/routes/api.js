//init
const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/notes', (req, res)=> {
	res.send('Getting Notes');
});


module.exports = router;