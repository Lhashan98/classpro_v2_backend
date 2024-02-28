var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    
    department: {
        type: String,
        required: true
      },
    course: {
        type: String,
        required: true
    },
    module: {
        type: String,
        required: true
    },
    batch: {
        type: String,
        required: true
    },

    capacity: {
        type: String,
        required: true
    },
    nameofbuilding : {
        type: String,
        required: true
    },
    typeofclass: {
        type: String,
        required: true
    },
    requestdate: {
        type: String,
        required: true
    },
    starttime: {
        type: String,
        required: true
    },
    endtime: {
        type: String,
        required: true
    },
    availableclass: {
        type: String,
        required: true
    },

    State:{
        type: String,
        required: true
    }
  
  
   
});

module.exports = mongoose.model('addnewreport', userSchema);