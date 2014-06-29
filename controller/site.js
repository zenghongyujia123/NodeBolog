var site = require('express').Router();
var TopicModel = require('../models/topic');

site.get('/', function (req, res, next) {
    TopicModel.find(function (err, topics) {
        if (err) {
            res.send(err);
            next(err);
        }
        console.log(topics);
        res.render('index', { topics: topics });
    });
});

site.post('/addtopic', function (req, res, next) {
    var topic = new TopicModel({title: req.body.title, content: req.body.content});
    topic.save(function(err){
        if(err){
            console.log('create new topic ');
            next(err);
        }
        res.json('create new topic ');
    })
});

module.exports = site;
