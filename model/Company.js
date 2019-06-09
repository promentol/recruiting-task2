var mongoose = require('mongoose')
var uuidv1 = require('uuid/v1')
var Schema = mongoose.Schema

var UserSchema = new Schema({
  email: {
    type: String,
    index: true
  },
  role: {
    type: String,
    index: true
  }
})

var WorkSpaceSchema = new Schema({
  _id: {
    type: String,
    default: uuidv1
  },
  displayName: {
    type: String,
    index: true,
    default: ''
  },
  name: {
    type: String,
    index: true
  },
  users: [UserSchema]
})

var CompanySchema = new Schema({
  _id: {
    type: String,
    default: uuidv1
  },
  displayName: {
    type: String,
    default: '',
    index: true
  },
  name: {
    type: String,
    unique: true
  },
  workspaces: [WorkSpaceSchema]
})

mongoose.model('Company', CompanySchema)
