var express = require('express');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

var config = require('./config/config');

require('./config/express')(app, config)

require('./config/mongoose')(config);

require('./config/passport')();

app.use('/', routes);
app.use('/users', users);

require('./config/errorHandler')(app);

module.exports = app;
