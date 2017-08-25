var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();
router.use(bodyParser.json());

var User = require('../models/user');

router.get('/',function(req, res){

});

router.post('/', function(req, res){
    console.log(req.body);
    User.findOne({email : req.body.email}).exec(function(err, user){
        if (err) {
            throw err;
        }
        else{
            if (!user) {
                //res.status(400).json("User not found");
                var newUser = new User({email : req.body.email, displayName : req.body.displayName, userId : req.body.userId, imageUrl : req.body.imageUrl});
                newUser.save(function(err, user){
                        if(err){
                            res.status(500).json(err);
                        }
                        else {
                            res.json("User successfully registered");
                        }
                });
            }
            else{
                
                    user.email = req.body.email;
                    user.displayName = req.body.displayName;
                    user.googleUserId = req.body.userId;
                    user.imageUrl = req.body.imageUrl;
                
                user.save();
                res.json({
                    message: "login successfully"
                });
            }
        }
        });
    
});

module.exports = router;