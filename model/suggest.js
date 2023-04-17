var mongoose = require('mongoose');

var Suggest = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
}, {timestamps: true});

module.exports = mongoose.model('Suggest', Suggest);