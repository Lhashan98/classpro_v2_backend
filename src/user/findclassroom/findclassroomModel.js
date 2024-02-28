var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var findclassroomSchema = new Schema({
 
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
  name_of_building: {
    type: String,
    required: true
  },
  type_of_class: {
    type: String,
    required: true
  },
  requestDate: {
    type: String,
    required: true
  },
  request_date: {
    type: String,
    required: true
  },
  start_time: {
    type: String,
    required: true
  },
  end_time: {
    type: String,
    required: true
  },
  availableclass: {
    type: String,
    required: true
  }



});

module.exports = mongoose.model('findclassrooms', findclassroomSchema);
