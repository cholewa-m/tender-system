const express = require('express');
const router = express.Router();
const newOfferController = require('../controllers/newOfferController');

router.get('/:tenderId', newOfferController.newOfferForm);  //TODO change name
router.post('/:tenderId', newOfferController.createOffer);

module.exports = router;
