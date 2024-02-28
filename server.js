const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 8002;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/classpro', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('DB Connected!');
  })
  .catch((error) => {
    console.log('Error:', error);
  });

// Define a simple user model
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  usertype: String,
  department: String,
});

const UserModel = mongoose.model('User', UserSchema);

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

// Add your login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Add a new route to handle GET requests for retrieving all data from the 'request' collection
app.get('/requests', async (req, res) => {
  try {
    const requests = await RequestModel.find({});
    res.json(requests);
  } catch (err) {
    console.error('Error fetching requests:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

  // Find the user in the database
  UserModel.findOne({ username, password }, (err, user) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }

    if (user) {
      res.json({
        success: true,
        message: 'Login successful',
        usertype: user.usertype,
        department: user.department, // Fix typo here
      });
    } else {
      res.json({ success: false, message: 'Invalid username or password' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
