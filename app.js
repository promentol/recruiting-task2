var express = require('express')
var logger = require('morgan')
var mongoose = require('mongoose')
var Celebrate = require('celebrate')
var isProduction = process.env.NODE_ENV === 'production'
var CompanyService = require('./services/CompanyService');
var WorkspaceService = require('./services/WorkspaceService');
var UserService = require('./services/UserService');

if (isProduction) {
  mongoose.connect(process.env.MONGODB_URI)
} else {
  mongoose.connect('mongodb://108.61.178.34/test', {
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

var companyService = new CompanyService(),
    workspaceService = new WorkspaceService(),
    userService = new UserService();

app.use('/companies', companiesRouter(companyService, workspaceService, userService))

app.use(Celebrate.errors())

app.use(function(err, req, res, next) {
  if(err.message == 'Not Found') {
    res.status(404).send({
      message: err.message
    })
  } else {
    res.status(500).send({
      message: err.message
    })
  }
})

module.exports = app
