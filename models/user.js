var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    email : {
        type : String,
        unique : true
    },
    displayName : {
        type : String,
    },
    googleUserId : {
        type: String,
        unique : true
    },
    imageUrl : {
        type: String
    }},
    {timestamps: true}
);

var User = mongoose.model('User', User);

module.exports = User;