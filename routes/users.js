var express = require('express');
var router = express.Router();
var users = require('./users');

/* Create new user */
router.post('/', function(req, res, next) {
  res.send('new user id');
});

/* Remove user */
router.delete('/:userId', function(req, res, next) {
    res.send('removed');
});

module.exports = router;