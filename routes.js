'use strict';

var express = require("express");
var router = express.Router();
var Location = require("./models").Location;

router.param("id", function(req, res, next, id){
	Location.findById(id, function(err, doc) {
		if(err) return next(err);
		if(!doc) {
			err = new Error("Not Found");
			err.status = 404;
			return next(err);
		}
		req.location = doc;
		return next();
	});
});

// GET /locations
// Route for locations collection
router.get("/", function(req, res) {
	Location.find({})
			.sort({created: -1})
			.exec(function(err, locations) {
				if (err) return next(err);
				res.json(locations);
			});
});

// POST /locations
// Route for creating locations
router.post("/", function(req, res, next) {
	var location = new Location(req.body);
	location.save(function(err, location) {
		if(err) return next(err);
		res.status(201);
		res.json(location);
	});
});

// PUT /locations/:id
// Edit a specific location
router.put('/:id', function(req, res) {
	req.location.update(req.body, function(err, result) {
		if(err) return next(err);
		res.json(result);
	});
});

// DELETE /locations/:id
// Delete a specific location
router.delete("/:id", function(req, res) {
	req.location.remove(function(err) {
		if(err) return next(err);
		res.json({ message: 'Deleted' });
	});
});

// GET /locations/:id
// Route for specific locations
router.get("/:id", function(req, res, next) {
	res.json(req.location);
});

module.exports = router;