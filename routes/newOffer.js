const express = require('express');
const router = express.Router();
const newOfferController = require('../controllers/newOfferController');

router.get('/:tenderId', newOfferController.newOfferForm);
router.post('/:tenderId', newOfferController.createOffer);

module.exports = router;
