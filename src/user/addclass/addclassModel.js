var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var addclassSchema = new Schema({

    buildingname: {
        type: String,
        required: true
    },
    ClassNumber: {
        type: String,
        required: true
    },
    capacity: {
        type: String,
        required: true
    },

    ClassType: {
        type: String,
        required: true
    },

    availability: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Class', addclassSchema);