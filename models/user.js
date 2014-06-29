var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/mytest');

var UserSchema=new mongoose.Schema({
    name: String,
    password: String
});

module.exports=mongoose.model('User',UserSchema);
