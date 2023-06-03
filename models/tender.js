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
    },
    getCurrentTenders: function (callback) {
        let currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
        let sql = `SELECT * FROM Tender WHERE start_date <= '${currentDate}' AND end_date >= '${currentDate}'`;
        dataBase.query(sql, function (err, result) {
            if (err) {
                throw err;
            } else {
                callback(err, result);
            }
        });
    },
    getTenderById: function(id, callback) {
        let sql = `SELECT * FROM Tender WHERE id = ${id}`;
        dataBase.query(sql, function (err, result) {
            if(err) {
                throw err;
            } else {
                callback(err, result[0]);
            }
        });
    }


};

module.exports = Tender;
