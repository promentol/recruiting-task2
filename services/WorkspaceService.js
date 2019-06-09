var async = require('async')
var mongoose = require('mongoose')

function WorkspaceService () {
  this.mongoose = mongoose
  this.CompanyModel = mongoose.model('Company')
}

WorkspaceService.prototype.createWorkspace = function (_id, body, cb) {

  var self = this;
  async.auto({
    unique: function (cb) {
      self.CompanyModel.findOne({
        _id,
        'workspaces.name': body.name
      }, function(err, res) {
        cb(err, !res)
      })
    },
    company: ['unique', function(res, cb) {
      if(res.unique) {
        self.CompanyModel.findOneAndUpdate({
          _id
        }, {
          $push: {
            workspaces: body
          }
        }, {
          useFindAndModify: false,
          new: true
        }, cb)
      } else {
        cb(new Error('duplicate name field'))
      }
    }]
  }, function(err, res) {
    cb(err, res && res.company)
  })
}

WorkspaceService.prototype.updateWorkspace = function (_id, workspaceId, body, cb) {
  var self = this;
  async.auto({
    unique: function (cb) {
      self.CompanyModel.findOne({
        _id,
        'workspaces.name': body.name,
        'workspaces._id': {
          $ne: workspaceId
        }
      }, function(err, res) {
        cb(err, !res)
      })
    },
    company: ['unique', function(res, cb) {
      if(res.unique) {
        self.CompanyModel.findOneAndUpdate({
          _id,
          'workspaces._id': workspaceId
        }, {
          $set: {
            'workspaces.$.displayName': body.displayName,
            'workspaces.$.name': body.name
          }
        }, {
          useFindAndModify: false,
          new: true
        }, cb)
      } else {
        cb(new Error('duplicate name field'))
      }
    }]
  }, function(err, res) {
    cb(err, res && res.company)
  })
}

module.exports = WorkspaceService;