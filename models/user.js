var mongoose = require('../mongoose/db');

var UserSchema = new mongoose.Schema({
    name: String,
    password: String
});

module.exports = mongoose.model('User',UserSchema);
