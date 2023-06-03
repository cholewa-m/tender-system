var express = require('express');
var router = express.Router();

const indexController = require('../controllers/indexController')

// localhost:3000/
router.get('/', indexController.getIndex);

module.exports = router;
