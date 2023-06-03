const tender = require('../models/tender');

exports.showCurrentTenders = (req, res) => {
    tender.getCurrentTenders((err, result) => {
        if(err) {
            res.status(500).send("Internal Server Error");
        } else {
            res.render('currentTenderList', { tenders: result });
        }
    });
};
