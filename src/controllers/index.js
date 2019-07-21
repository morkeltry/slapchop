const express = require('express');
const path = require('path');
const router = express.Router();

const home = require('./home');
const api = require('./api');


console.log(api);

router.get('/', home);
router.post('/', api.store.single('myFile'), api.retrieve.post);

module.exports = router;
