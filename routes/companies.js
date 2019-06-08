var express = require('express');
var router = express.Router();
var workspacess = require('./workspaces');

/* GET companies listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* POST create company. */
router.post('/', function(req, res, next) {
  res.send('company created');
});

/* GET list company. */
router.get('/:companyId', function(req, res, next) {
  res.send('get company');
});

/* Patch company. */
router.patch('/:companyId', function(req, res, next) {
  res.send('patch company');
});

/* add workspaces */
router.use('/:companyId/workspaces', workspacess);

module.exports = router;
