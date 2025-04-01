var express = require('express');
var router = express.Router();
var title = require('../controllers/home')

/* GET home page. */
router.get('/', title);

module.exports = router;
