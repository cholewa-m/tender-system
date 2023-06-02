var express = require('express');
var path = require("path");

const dotenv = require('dotenv').config();

var indexRouter = require('./routes/index');


var app = express();

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);



module.exports = app;
