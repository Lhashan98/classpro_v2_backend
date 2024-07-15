const mongoose = require('mongoose');

// Define the schema for the user login data
const loginSchema = new mongoose.Schema({
  username: { type: String, required: true }, // Field for username
  password: { type: String, required: true }, // Field for password
  usertype: { type: String, required: true }, // Field for user type
  department: { type: String, required: true }, // Field for department
});

// Create a Mongoose model based on the schema
const Login = mongoose.model('Login', loginSchema);

// Export the model
module.exports = Login;
