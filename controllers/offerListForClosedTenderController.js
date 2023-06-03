const offer = require('../models/offer');

exports.showOffersForClosedTender = (req, res) => {
    const tenderId = req.params.tenderId;

    offer.getValidOffersForTender(tenderId, (err, result) => {
        if (err) {
            res.status(500).send("Internal Server Error");
        } else {
            res.render('offerListForClosedTender', { offers: result, tenderId: tenderId });
        }
    });
};
