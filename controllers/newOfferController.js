const tenderModel = require('../models/tender');
const offerModel = require('../models/offer');
const moment = require('moment');

exports.newOfferForm = (req, res) => {
    const tenderId = req.params.tenderId;
    res.render('newOffer', { tenderId });
};

exports.createOffer = (req, res) => {
    const { bidder, cost } = req.body;
    const tenderId = req.params.tenderId;

    tenderModel.getTenderById(tenderId, (err, result) => {
        if (err) {
            res.status(500).send("Internal Server Error");
        } else {
            let currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
            let tenderEndDate = moment(result.end_date).format('YYYY-MM-DD HH:mm:ss');
            if (currentDate <= tenderEndDate) {
                offerModel.addOffer(bidder, cost, currentDate, tenderId, (err, result) => {
                    if (err) {
                        res.status(500).send("Internal Server Error");
                    } else {
                        res.redirect('/');
                    }
                });
            } else {
                res.render('error', { message: 'This tender is already closed.', redirectUrl: '/current-tenders' });
            }
        }
    });
};
