var async = require('async')
var mongoose = require('mongoose')

function WorkspaceService () {
  this.mongoose = mongoose
  this.CompanyModel = mongoose.Company
}

WorkspaceService.prototype.createWorkspace = function (body, cb) {
    this.CompanyService.update(body, cb)
}

WorkspaceService.prototype.updateWorkspace = function (body, cb) {
  this.CompanyService.update(body, cb)
}

module.exports = WorkspaceService;