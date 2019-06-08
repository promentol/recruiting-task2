var express = require('express');
var router = express.Router();
var users = require('./users');

/* Create new workspace */
router.post('/', function(req, res, next) {
  res.send('workspaces');
});

/* Edit existing workspace */
router.patch('/:workspaceId', function(req, res, next) {
    res.send('edit workspaces');
});

/* add users */
router.get('/:id/users', users);

module.exports = router;
