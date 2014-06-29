var user = require('express').Router();
var UserModel = require('../models/user');

// on routes that end in /user
// get all the users ( accessed at GET http://localhost:8080/api/user )
user.get('/getall', function (req, res, next) {
    UserModel.find(function (err, users) {
        if (err)
            res.send(err);
        console.log(users);
        //res.send(users);
        res.render('index', { list: users });

    });
});

// on routes that end in /user/:userId
// get the user with that id ( accessed at GET http://localhost:8080/api/user/:userId )
user.get('/get/:userId', function (req, res, next) {
    UserModel.findById(req.params.userId, function (err, user) {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
});

// update the user with this id( accessed at PUT http://localhost:8080/api/user/:userId )
user.post('update/:userId', function (req, res, next) {
    UserModel.findById(req.params.userId, function (err, user) {
        if (err) {
            res.send(err);
        }
        user.name = req.body.name;
        user.save(function (err) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'user updated', name: user.name });
        });
    });
});

// delete the user with this userId ( accessed at DELETE http://localhost:8080/api/user/:userId )
user.post('/delete/:userId', function (req, res, next) {
    UserModel.remove({ _id: req.params.userId }, function (err, count) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully delete count : ' + count });
    });
});

// create a user ( access at POST http://localhost:8080/api/user )
user.post('/create', function (req, res, next) {
    // create a new instance of the UserModel
    var userEntity = new UserModel({ name: req.body.name, password: req.body.password });
    // save the userEntity and check errors
    userEntity.save(function (err) {
        if (err) {
            console.log('meow');
        }
        res.json({ message: 'user post' });
    });
});
module.exports = user;
