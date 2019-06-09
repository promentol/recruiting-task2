var express = require('express')

module.exports = function (userService) {
  var router = express.Router({
    mergeParams: true
  })

  /* Create new user */
  router.post('/', function (request, response, next) {
    userService.createUser(request.params.companyId, request.params.workspaceId, request.body, function (err, result) {
      if (err) {
        next(err)
      } else {
        // send user
        response.send(request.body)
      }
    })
  })

  /* Remove user */
  router.delete('/:email', function (request, response, next) {
    userService.removeUser(request.params.companyId, request.params.workspaceId, request.params.email, function (err, result) {
      if (err) {
        next(err)
      } else {
        response.send({
          status: 'ok'
        })
      }
    })
  })

  return router
}
