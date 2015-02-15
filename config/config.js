var fs = require('fs');
var _ = require('lodash');


function loadConfig() {
	// Load configurations
	// Set the node environment variable if not set before
	// Check if a file named as the NODE_ENV variable value exists
	var configPath = process.cwd() + '/config/env';
	process.env.NODE_ENV = ~fs.readdirSync(configPath).map(function(file) {
		// Remove the extension of every filename in the array
		return file.slice(0, -3);
	}).indexOf(process.env.NODE_ENV) ? process.env.NODE_ENV : 'development';
	// Extend the base configuration in all.js with environment
	// specific configuration
	return _.extend(
		require(configPath + '/all'),
		require(configPath + '/' + process.env.NODE_ENV) || {}
	);
}

module.exports = loadConfig();