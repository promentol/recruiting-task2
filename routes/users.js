var express = require('express')

module.exports = function (userService) {
  var router = express.Router({
    mergeParams: true
  })

  /* Create new user */
  router.post('/', function (req, res, next) {
    res.send('new user id')
  })

  /* Remove user */
  router.delete('/:userId', function (req, res, next) {
    res.send('removed')
  })

  return router;
}