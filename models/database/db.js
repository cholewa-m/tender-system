const db = require('./connection');

var DataBase = {
    addTender: function (name, content, institution, budget, startDate, endDate, callback) {
        var sql = `INSERT INTO Tender (name, content, institution, budget, start_date, end_date) 
                    VALUES ('${name}', '${content}', '${institution}', ${budget}, '${startDate}', '${endDate}')`;
        db.query(sql, function (err, result) {
            if (err) {
                throw err;
            } else {
                callback(err, result);
            }
        });
    }


}

module.exports = DataBase;
