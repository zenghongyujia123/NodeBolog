/**
 * Created by zzj on 2014/6/29.
 */
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/mytest');

module.exports = mongoose;