'use strict';
var request = require('request');
var mongoose = require('mongoose');

exports.getClients = function(args, done){
	console.log('hello');
	return done(null, {message: 'up and running'});
};