var express = require('express');
var path = require("path");

const dotenv = require('dotenv').config();

var indexRouter = require('./routes/index');
var newTenderRouter = require('./routes/newTender');
var currentTenderListRouter = require('./routes/currentTenderList');
var tenderDetailRouter = require('./routes/tenderDetail');
var newOfferRouter = require('./routes/newOffer');
var closedTenderListRouter = require('./routes/closedTenderList');
var offerListForClosedTenderRouter = require('./routes/offerListForClosedTender');


var app = express();


// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/add-tender', newTenderRouter);
app.use('/current-tenders', currentTenderListRouter);
app.use('/tender', tenderDetailRouter);
app.use('/add-offer', newOfferRouter);
app.use('/closed-tenders', closedTenderListRouter);
app.use('/offer-list', offerListForClosedTenderRouter);


module.exports = app;
