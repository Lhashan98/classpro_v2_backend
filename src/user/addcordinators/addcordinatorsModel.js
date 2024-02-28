var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

   
   
    enumber: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    
    
});

module.exports = mongoose.model('coordinator_details', userSchema);