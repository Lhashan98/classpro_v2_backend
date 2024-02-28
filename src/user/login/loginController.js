// loginController.js
const Login = require('./loginModel');

async function loginUserControllerFn(req, res) {
  const { username, password, usertype, department } = req.body;

  try {
    const user = await Login.findOne({ username, password, });
    if (user) {
      res.json({ success: true, message: 'Login successful', usertype: user.usertype, department: user.department });
    } else {
      res.json({ success: false, message: 'Invalid username or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
}

async function saveLoginControllerFn(req, res) {
  const { username, password, usertype, department } = req.body;

  try {
    const login = new Login({
      username,
      password,
      usertype,
      department,
    });

    await login.save();

    res.json({ success: true, message: 'Login information saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
}

module.exports = { loginUserControllerFn, saveLoginControllerFn };