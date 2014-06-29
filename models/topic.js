var mongoose = require('../mongoose/db');

var TopicSchema = new mongoose.Schema({
    title: String,
    Content: String
});

module.exports = mongoose.model('Topic', TopicSchema);
