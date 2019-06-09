var express = require('express')
var users = require('./users')
var workspaceValidations = require('../validations/companies')

module.exports = function (workspaceService, userService) {
  var router = express.Router({
    mergeParams: true
  })

  /* Create new workspace */
  router.post('/', workspaceValidations.create, function (request, response, next) {
    workspaceService.createWorkspace(request.params.companyId, request.body, function (err, result) {
      if (err) {
        next(err)
      } else {
        response.send(result)
      }
    })
  })

  /* Edit existing workspace */
  router.patch('/:workspaceId', workspaceValidations.update, function (request, response, next) {
    workspaceService.updateWorkspace(request.params.companyId, request.params.workspaceId, request.body, function (err, result) {
      if (err) {
        next(err)
      } else {
        response.send(result)
      }
    })
  })

  /* add users */
  router.use('/:workspaceId/users', users(userService))

  return router
}
