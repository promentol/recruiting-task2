var async = require('async')
var mongoose = require('mongoose')

function UserService () {
  this.mongoose = mongoose
  this.CompanyModel = mongoose.Company
}

UserService.prototype.createUser = function (body, cb) {
    async.auto({
        company: function(cb) {

        },
    }, )
    this.CompanyService.update(body, cb)
}

UserService.prototype.updateWorkspace = function (body, cb) {
  this.CompanyService.update(body, cb)
}

UserService.prototype.checkUniqueEmail = function(body, cb) {
    //ge
}

module.exports = UserService;