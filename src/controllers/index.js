const express = require('express');
const path = require('path');
const router = express.Router();

const home = require('./home');
const api = require('./api');

router.get('/', home);
router.post('/', api.post);

module.exports = router;
