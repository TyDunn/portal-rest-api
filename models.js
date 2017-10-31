'use strict';

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var LocationSchema = new Schema({
	user: String,
	created: { type: Date, default: Date.now },
	location: Object
});

var Location = mongoose.model("Location", LocationSchema);

module.exports.Location = Location;