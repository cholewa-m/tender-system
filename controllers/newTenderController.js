const tender = require('../models/tender');

exports.newTenderForm = (req, res) => {
    res.render('newTender');
};

exports.createTender = (req, res) => {
    const { name, content, institution, budget, startDate, endDate } = req.body;

    tender.addTender(name, content, institution, budget, startDate, endDate, (err, result) => {
        if(err) {
            res.status(500).send("Internal Server Error");
        } else {
            res.redirect('/');
        }
    });
};
