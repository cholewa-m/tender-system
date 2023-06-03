const tender = require('../models/tender');

exports.showClosedTenders = (req, res) => {
    tender.getClosedTenders((err, result) => {
        if (err) {
            res.status(500).send("Internal Server Error");
        } else {
            res.render('closedTenderList', { tenders: result });
        }
    });
};
