var mongoose = require('mongoose');
var userModel = require('../models/User');

module.exports = function(config) {
	mongoose.connect(config.db);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'db connection error'));
	db.once('open', function() {
		console.log('db connection successful')
	});
}