var mongoose = require('mongoose')

function CompanyService () {
  this.mongoose = mongoose
  this.CompanyModel = mongoose.model('Company')
}

CompanyService.prototype.createCompany = function (body, cb) {
  this.CompanyModel.create(body, cb)
}

CompanyService.prototype.updateCompany = function (_id, body, cb) {
  this.CompanyModel.findByIdAndUpdate(_id, {
    $set: body
  }, function(err, res) {
    if(err) {
      cb(err)
    } else if (res) {
      cb(null, res)
    } else {
      cb(new Error('Not Found'));
    }
  })
}

CompanyService.prototype.getCompanyById = function (_id, cb) {
  this.CompanyModel.findById(_id, function(err, res) {
    if(err) {
      cb(err)
    } else if (res) {
      cb(null, res)
    } else {
      cb(new Error('Not Found'));
    }
  })
}

CompanyService.prototype.getCompanies = function (cb) {
  this.CompanyModel.find(cb);
}

module.exports = CompanyService