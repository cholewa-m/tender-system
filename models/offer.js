const dataBase = require('./database/connection');

const Offer = {
    addOffer: function (bidder, cost, date, tenderId, callback) {
        let sql = `INSERT INTO Offer (bidder, cost, date, tender_id)
               VALUES ('${bidder}', ${cost}, '${date}', ${tenderId})`;
        dataBase.query(sql, function (err, result) {
            if (err) {
                throw err;
            } else {
                callback(err, result);
            }
        });
    },
    getValidOffersForTender: function(tenderId, callback) {
        let sql = `SELECT Offer.* FROM Offer JOIN Tender ON Offer.tender_id = Tender.id 
        WHERE Offer.tender_id = ${tenderId} AND Offer.cost <= Tender.budget
        ORDER BY Offer.cost ASC`;
        dataBase.query(sql, function(err, result) {
            if (err) {
                throw err;
            } else {
                callback(err, result);
            }
        });
    },




};

module.exports = Offer;
