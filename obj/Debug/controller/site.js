var site=require('express').Router();
var UserModel=require('../models/user');

site.get('/',function(req,res,next){
    UserModel.find(function(err,users) {
        if(err)
            res.send(err);
        console.log(users);
        res.render('index',{ list: users });
});
});


module.exports=site;
