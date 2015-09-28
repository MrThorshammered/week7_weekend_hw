var mongoose = require('mongoose')

var animalSchema = new mongoose.Schema({
	id: Number,
	name: String,
	dob: Number,
	gender: String,
	family: String,
	status: String
})


var Animal = mongoose.model('Animal', animalSchema)

module.exports = Animal;