'use strict';

var implement = require('./implementation');

module.exports = function(options){
	var seneca = this;

	seneca.add({role: 'clients', cmd:'getClients'}, implement.getClients);
}
