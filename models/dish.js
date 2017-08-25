var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Dish = new Schema({
    
    category : {
        type : String
    },
    cuisineType : {
        type : String
    },
    dish : {
        type: String    
    },
    path : {
        type: String
    }
});

var Dish = mongoose.model('Dish', Dish);

module.exports = Dish;