const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const cron = require('node-cron');
const addreportModel = require('./src/user/addreport/addreportModel');

const app = express();
const PORT =  8002;

// Connect to MongoDB with authentication credentials
mongoose.connect('mongodb://rootUser:rootUser1234@127.0.0.1:27017/classpro', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('DB Connected!');
})
.catch((error) => {
  console.error('Error connecting to DB:', error);
});

// Define a simple user model
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  usertype: String,
  department: String,
});

const UserModel = mongoose.model('User', UserSchema);

// Define the Booking model corresponding to the "addreport" collection
const BookingSchema = new mongoose.Schema({
  classroom: String,
  date: Date,
  startTime: String,
  endTime: String,
  user: String,
});

const BookingModel = mongoose.model('addreport', BookingSchema);

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

// Define endpoint to fetch requests (assuming RequestModel is defined)
const RequestSchema = new mongoose.Schema({
  // Define schema fields as per your requirements
});

const RequestModel = mongoose.model('Request', RequestSchema);

app.get('/requests', async (req, res) => {
  try {
    const requests = await RequestModel.find({});
    res.json(requests);
  } catch (err) {
    console.error('Error fetching requests:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add your login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

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
        department: user.department,
      });
    } else {
      res.json({ success: false, message: 'Invalid username or password' });
    }
  });
});

// // Schedule task to run at 00:00 on Sunday
// cron.schedule('0 0 * * 0', async () => {
//   try {
//     await BookingModel.deleteMany({});
//     console.log('All bookings in addreport have been reset');
//   } catch (err) {
//     console.error('Error resetting bookings:', err);
//   }
// });


// Schedule task to run every minute

// cron.schedule('* * * * *', async () => {
//   try {
//     await addreportModel.deleteMany({});
//     console.log('All bookings in addnewreports have been reset');
//   } catch (err) {
//     console.error('Error resetting bookings:', err);
//   }
// });


// // Temporary endpoint to manually reset bookings for testing
// app.get('/api/reset', async (req, res) => {
//   try {
//     await BookingModel.deleteMany({});
//     res.send('All bookings in addreport have been reset');
//   } catch (err) {
//     console.error('Error resetting bookings:', err);
//     res.status(500).send('Server error');
//   }
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
