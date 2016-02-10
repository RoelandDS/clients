'use strict';
var request = require('request');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/workshop');

// Schema
var clientSchema = new mongoose.Schema({
	"﻿Gender" : String,
	"GivenName" : String,
	"MiddleInitial" : String,
	"Surname" : String,
	"StreetAddress" : String,
	"City" : String,
	"State" : String,
	"StateFull" : String,
	"ZipCode" : String,
	"Country" : String,
	"CountryFull" : String,
	"Birthday" : Date,
	"Occupation": String
});

var Client = mongoose.model('Client', clientSchema);

exports.getClients = function(args, done){

	Client.find().limit(10).lean().exec(function (err, clients) {
		return done(null, { clients: JSON.stringify(clients) });
	});

};

