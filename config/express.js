var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var expressSession = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

module.exports = function(app, config) {
	// view engine setup
	app.set('views', path.join(config.rootPath, 'views'));
	app.set('view engine', 'jade');

	//Bower components
	app.use(express.static(path.join(config.rootPath, 'public')));
	app.use('/bower_components',  express.static(path.join(config.rootPath, '/bower_components')));

	// uncomment after placing your favicon in /public
	//app.use(favicon(path.join(config.rootPath, '/public/favicon.ico')));
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(expressSession({secret: config.secret, resave: false, saveUninitialized: false}));
	app.use(cookieParser());
}