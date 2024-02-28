// Import required modules
const express = require('express');
const router = express.Router();
const Login = require('../models/loginModel'); // Adjust the path based on your project structure

// Login Service - Save Login Information
router.post('/login/save', async (req, res) => {
  const { username, password, usertype, department } = req.body;

  try {
    // Create a new login document
    const login = new Login({
      username,
      password,
      usertype,
      department,
    });

    // Save the login document to the database
    await login.save();

    // Send a JSON response indicating success
    res.json({ success: true, message: 'Login information saved successfully' });
  } catch (error) {
    // Handle errors by logging and sending an error response
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Export the router to be used in the main Express application
module.exports = router;
