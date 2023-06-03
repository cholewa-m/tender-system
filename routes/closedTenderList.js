var express = require('express');
var router = express.Router();
var closedTenderListController = require('../controllers/closedTenderListController');

router.get('/', closedTenderListController.showClosedTenders);

module.exports = router;
