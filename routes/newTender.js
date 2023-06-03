var express = require('express');
var router = express.Router();
const newTenderController = require('../controllers/newTenderController');

router.get('/', newTenderController.newTenderForm);     //TODO change name
router.post('/', newTenderController.createTender);

module.exports = router;
