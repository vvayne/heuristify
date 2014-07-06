var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var Task = new Schema({
	taskname : String,
	taskduration : Number,
	taskpriority : Number
});


module.exports = mongoose.model('Task', Task);