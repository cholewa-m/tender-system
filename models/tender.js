const dataBase = require('./database/connection');

const Tender = {
    addTender: function (name, content, institution, budget, startDate, endDate, callback) {
        let sql = `INSERT INTO Tender (name, content, institution, budget, start_date, end_date)
                   VALUES ('${name}', '${content}', '${institution}', ${budget}, '${startDate}', '${endDate}')`;
        dataBase.query(sql, function (err, result) {
            if (err) {
                throw err;
            } else {
                callback(err, result);
            }
        });
    }


};

module.exports = Tender;
