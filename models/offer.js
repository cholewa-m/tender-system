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
    }

};

module.exports = Offer;
