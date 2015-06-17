var mongoose = require('mongoose');

module.exports = mongoose.model('Item', {
	name: {type : String},
	location: {type: String},
	date: {type: Number}
});