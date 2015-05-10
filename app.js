var express = require('express');

var mongoose = require('mongoose');
var passport = require('passport');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

var config = require('./config/config');

require('./config/express')(app, config)

var User = require('./models/User');
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

mongoose.connect(config.db, function(err) {
    if(err) {
        console.log('db connection error', err);
    } else {
        console.log('db connection successful');
    }
});

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
