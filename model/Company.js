var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: {
        type: String,
        unique : true
    },
    role: {
        type: String,
        index: true,
    }
})

var WorkSpaceSchema = new Schema({
    _id: Schema.ObjectId,
    displayName: {
        type: String,
        index: true,
        default: ''
    },
    name: {
        type: String,
        unique : true,
        default: function(a, s, d) {
            console.log(a, s, d, this)
        }
    },
    users: [UserSchema]
})

var CompanySchema = new Schema({
    _id: Schema.ObjectId,
    displayName: {
        type: String,
        default: '',
        index: true
    },
    name: {
        type: String,
        unique : true,
        default: function(a, s, d) {
            console.log(a, s, d, this)
        }
    },
    workspaces: [WorkSpaceSchema]
});

mongoose.model('Company', CompanySchema);
