var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	rootPath: rootPath,
	http: {
		port: process.env.PORT || 3000
	},
	secret: "MySecret"
};