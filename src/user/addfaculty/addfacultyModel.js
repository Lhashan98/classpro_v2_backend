var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var addfacultySchema = new Schema({

    faculty: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    userInput: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model('faculty', addfacultySchema);