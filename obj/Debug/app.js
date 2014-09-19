
var app = require('express')();
var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

var site = require('./controller/site');
var user = require('./controller/user');
app.use('/user',user);
app.use('/',site);

app.set('port', 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs-locals'));

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
    ///test
    //tst
    
});



module.exports = app;
