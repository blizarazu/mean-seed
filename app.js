var express = require('express');

var app = express();

var config = require('./config/config');

require('./config/express')(app, config)

require('./config/mongoose')(config);

require('./config/passport')();

require('./config/routes')(app);

require('./config/errorHandler')(app);

module.exports = app;
