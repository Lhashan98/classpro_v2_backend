var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

   

    adddetails: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
      },
    
});

module.exports = mongoose.model('details', userSchema);