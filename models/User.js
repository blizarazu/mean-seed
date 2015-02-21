var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
	email: String,
	password: String,
	creationDate: Date
});

UserSchema.plugin(passportLocalMongoose, {
	usernameField: 'email',
	usernameUnique: true,
	usernameLowerCase: true
});

module.exports = mongoose.model('User', UserSchema);