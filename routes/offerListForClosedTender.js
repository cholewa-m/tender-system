const express = require('express');
const router = express.Router();
const offerListForClosedTenderController = require('../controllers/offerListForClosedTenderController');

router.get('/:tenderId', offerListForClosedTenderController.showOffersForClosedTender);

module.exports = router;
