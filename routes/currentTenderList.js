var express = require('express');
var router = express.Router();
var currentTenderListController = require('../controllers/currentTenderListController');

router.get('/', currentTenderListController.showCurrentTenders);

module.exports = router;
