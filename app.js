var express = require('express');
var path = require('path');
var logger = require('morgan');
var Celebrate = require('celebrate'); 


var indexRouter = require('./routes/index');
var companiesRouter = require('./routes/companies');

var app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);
app.use('/companies', companiesRouter);

app.use(Celebrate.errors());


module.exports = app;