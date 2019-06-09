var express = require('express')
var users = require('./users')
var workspaceValidations = require('../validations/companies')

module.exports = function(workspaceService, userService) {
  var router = express.Router()

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
  router.patch('/:workspaceId', workspaceValidations.update, function (req, res, next) {
    res.send('edit workspaces')
  })

  /* add users */
  router.get('/:id/users', users(userService))

  return router;
}
