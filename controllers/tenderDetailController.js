const Tender = require('../models/tender');

exports.showDetail = function(req, res) {
    let id = req.params.id;
    Tender.getTenderById(id, (err, result) => {
        if(err) {
            res.status(500).send("Internal Server Error");
        } else {
            res.render('tenderDetail', { tender: result });
        }
    });
};
