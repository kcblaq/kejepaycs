var mongoose = require('mongoose');

const WaitingListSchema = new mongoose.Schema({
	email: {type:String, required: true, unique: true},

	
} ,{timestamps: true});

// const Waitinglist = mongoose.model('Waitinglist', WaitingListSchema);
module.exports = mongoose.model('Waitinglist', WaitingListSchema);
