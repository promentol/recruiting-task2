var async = require('async')
var mongoose = require('mongoose')

function UserService () {
  this.mongoose = mongoose
  this.CompanyModel = mongoose.model('Company')
}

UserService.prototype.createUser = function (_id, workspaceId, body, cb) {
  var self = this
  async.auto({
    unique: function (cb) {
      self.CompanyModel.findOne({
        _id,
        'workspaces._id': workspaceId,
        'workspaces.users.email': body.email
      }, function (err, res) {
        cb(err, !res)
      })
    },
    company: ['unique', function (res, cb) {
      if (res.unique) {
        self.CompanyModel.findOneAndUpdate({
          _id,
          'workspaces._id': workspaceId
        }, {
          $push: {
            'workspaces.$.users': body
          }
        }, {
          useFindAndModify: false,
          new: true
        }, cb)
      } else {
        cb(new Error('duplicate name field'))
      }
    }]
  }, function (err, res) {
    cb(err, res && res.company)
  })
}

UserService.prototype.removeUser = function (_id, workspaceId, email, cb) {
  this.CompanyModel.findOneAndUpdate({
    _id,
    'workspaces._id': workspaceId
  }, {
    $pull: {
      workspaces: {
        users: {
          $elemMatch: {
            email: 'asd@asd.asd'
          }
        }
      }
    }
  }, {
    useFindAndModify: false,
    new: true
  }, cb)
}

module.exports = UserService
