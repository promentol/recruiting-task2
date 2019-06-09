var express = require('express')
var workspaces = require('./workspaces')
var companyValidations = require('../validations/companies')

module.exports = function (companyService, workspaceService, userService) {
  var router = express.Router()

  /* GET companies listing. */
  router.get('/', function (request, response, next) {
    companyService.getCompanies(function (err, result) {
      if (err) {
        next(err)
      } else {
        response.send(result)
      }
    })
  })

  /* POST create company. */
  router.post('/', companyValidations.create, function (request, response, next) {
    companyService.createCompany(request.body, function (err, result) {
      if (err) {
        next(err)
      } else {
        response.send(result)
      }
    })
  })

  /* GET list company. */
  router.get('/:companyId', function (request, response, next) {
    companyService.getCompanyById(request.params.companyId, function (err, result) {
      if (err) {
        next(err)
      } else {
        response.send(result)
      }
    })
  })

  /* Patch company. */
  router.patch('/:companyId', companyValidations.update, function (request, response, next) {
    companyService.updateCompany(request.params.companyId, request.body, function (err, result) {
      if (err) {
        next(err)
      } else {
        response.send(result)
      }
    })
  })

  /* add workspaces */
  router.use('/:companyId/workspaces', workspaces(workspaceService, userService))

  return router
}
