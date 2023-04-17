var express = require('express');
var mongoose = require('mongoose');
var WaitingSchema = require('../model/waitinglistModel');

var route = express.Router();

route.post('/', async (req, res) => {
	const isemail = await WaitingSchema.findOne({ email: req.body.email });
	if (isemail) return res.send('Seems we already have your detail');
	try {
		const newsubscriber = new WaitingSchema({
			email: req.body.email,
		});
		newsubscriber.save();
		res.status(201).send('Subscribed sucessfully');
	} catch (error) {
		console.log(error);
	}
});

route.get('/', async (req, res) => {
	const subscribers = await WaitingSchema.find();
	res.status(200).json({
		data: subscribers,
		quantity: subscribers.length
	})
})

module.exports = route;
