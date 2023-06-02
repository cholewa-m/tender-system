var express = require('express');
var router = express.Router();
const newTenderController = require('../controllers/newTenderController');

router.get('/', newTenderController.newTenderForm);
router.post('/', newTenderController.createTender);

module.exports = router;
