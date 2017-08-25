var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserHistory = new Schema({
    userId : {
        type : String
    },
    userType : {
        type : String
    },
    cuisineType : {
        type : String
    },
    dish : {
        type: String    
    }},
    {timestamps: true}
);

var UserHistory = mongoose.model('UserHistory', UserHistory);

module.exports = UserHistory;