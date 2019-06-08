var express = require('express')
var router = express.Router()
var workspacess = require('./workspaces')
var companyValidations = require('../validations/companies')

/* GET companies listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

/* POST create company. */
router.post('/', companyValidations.create, function (req, res, next) {
  CompanyService.create(req.body, function (err, res) {
    if (err) {
      next(err)
    } else {
      res.send(res)
    }
  })
})

/* GET list company. */
router.get('/:companyId', function (req, res, next) {
  res.send('get company')
})

/* Patch company. */
router.patch('/:companyId', companyValidations.update, function (req, res, next) {
  res.send('patch company')
})

/* add workspaces */
router.use('/:companyId/workspaces', workspacess)

module.exports = router
