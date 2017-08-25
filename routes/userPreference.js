var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();
router.use(bodyParser.json());

var UserHistory = require('../models/userHistory');
var Dish = require('../models/dish');

router.get('/',function(req, res){

});

router.post('/', function(req, res){
    console.log(req.body);
    var preference= new UserHistory({userId:req.body.userId, userType:req.body.type, cuisineType:req.body.cuisine});
    preference.save(function(err, data){
        if (err) {
            console.log(err);
            res.json("Sorry No dish found");
        }
        else{
            console.log(data);
            Dish.find( { $and : [{ cuisineType : data.cuisineType},{category: data.userType}]}, function(err, dish){
              if(err){
                    console.log(err);
                    res.json("Not found");
                }
                else if(!dish){
                    console.log(dish);
                    res.json("Not found yet");
                }
                else{
                    console.log(dish);
                    var response =  [
                            {
                                dishTitle : dish[0].dish,
                                imgUrl : dish[0].path
                                },
                            {
                                dishTitle : dish[1].dish,
                                imgUrl : dish[1].path
                                }
                        ];
                    res.json(response);
                }
            }).limit(2);
            
        }
    });
    
});

module.exports = router;