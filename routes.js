'use strict';

var express = require("express");
var router = express.Router();

// GET /locations
// Route for locations collection
router.get("/", function(req, res) {
	res.json({
		response: "You sent a GET request"
	});
});

// POST /locations
// Route for creating locations
router.post("/", function(req, res) {
	res.json({
		response: "You sent a POST request",
		body: req.body
	});
});

// GET /locations/:id
// Route for specific locations
router.get("/:id", function(req, res) {
	res.json({
		response: "You sent a GET request for ID " + req.params.id
	});
});

module.exports = router;