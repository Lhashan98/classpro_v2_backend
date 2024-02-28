var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    department: {
        type: String,
        required: true
      },
    course_name: {
        type: String,
        required: true
    },
    // Batch: {
    //     type: String,
    //     required: true
    // },
    CourseCode: {
        type: String,
        required: true
    },
    // capacity: {
    //     type: String,
    //     required: true
    // },
    discription: {
        type: String,
        required: true
    },
  
   
});

module.exports = mongoose.model('addnewcourse', userSchema);