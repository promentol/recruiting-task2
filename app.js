var express = require('express')
var logger = require('morgan')
var mongoose = require('mongoose')
var Celebrate = require('celebrate')
var isProduction = process.env.NODE_ENV === 'production'

if (isProduction) {
  mongoose.connect(process.env.MONGODB_URI)
} else {
  mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true
  })
  mongoose.set('debug', true)
}

require('./model/Company')

var indexRouter = require('./routes/index')
var companiesRouter = require('./routes/companies')

var app = express()

app.use(logger('dev'))
app.use(express.json())

app.use('/', indexRouter)
app.use('/companies', companiesRouter)

app.use(Celebrate.errors())

module.exports = app
