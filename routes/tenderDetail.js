var express = require('express');
var router = express.Router();
var tenderDetailController = require('../controllers/tenderDetailController');

router.get('/:id', tenderDetailController.showDetail);

module.exports = router;
