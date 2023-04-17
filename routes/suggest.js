var express = require('express');
var route = express.Router();
var Suggest = require("../model/suggest")

route.post('/', async (req, res) => {
    try {
        const suggestions = new Suggest({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
        })
        suggestions.save()
        res.send("Thank you for your suggestion")
    } catch (error) {
        console.log(error)
    }

})

route.get('/', async (req, res) => {
    const suggestions = await Suggest.find()
    res.send(suggestions);
})

module.exports = route