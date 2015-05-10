var passport = require('passport'),
	mongoose = require('mongoose'),
	User = mongoose.model('User');

module.exports = function() {
	passport.use(User.createStrategy());

	passport.serializeUser(User.serializeUser());
	passport.deserializeUser(User.deserializeUser());
}