const express = require('express');
const router = express.Router();

// Import controllers
const userController = require('../src/user/userController');
const adddetailsController = require('../src/user/adddetails/adddetailsController');
const addcordinatorsController = require('../src/user/addcordinators/addcordinatorsController');
const addCourseController = require('../src/user/addcourse/addcourseController');
const addfacultyController = require('../src/user/addfaculty/addfacultyController');
const addclassController = require('../src/user/addclass/addclassController');
const loginController = require('../src/user/login/loginController');
const addreportController = require('../src/user/addreport/addreportController');
const findclassroomController = require('../src/user/findclassroom/findclassroomController');
const bookingController = require('../src/user/booking/bookingController');
const roomController = require('../src/user/room/roomController');


// Define route for changing passwords
router.post('/change-password', loginController.changePassword);

// Route for checking availability
router.post('/availability', bookingController.getAvailableRooms);



// booking operations using room number
router.post('/booking', bookingController.createBooking);
router.get('/booking/room/:roomNumber', bookingController.getBookingByRoomNumber);
router.put('/booking/room/:roomNumber', bookingController.updateBookingByRoomNumber);
router.delete('/booking/room/:roomNumber', bookingController.deleteBookingByRoomNumber);

// Room routes

router.route('/room/:roomNumber').get(roomController.getRoomByNumber);
router.route('/room').post(roomController.createRoom);
router.route('/room/:roomNumber').put(roomController.updateRoom);
router.route('/room/:roomNumber').delete(roomController.deleteRoom);



// User routes
router.route('/user/getAll').get(userController.getDataConntrollerfn);
router.route('/user/create').post(userController.createUserControllerFn);
router.route('/user/update/:id').patch(userController.updateUserController);
router.route('/user/delete/:id').delete(userController.deleteUserController);

// Add details routes
router.route('/adddetails/create').post(adddetailsController.adddetailscreateUserControllerFn);
router.route('/adddetails/getAll').get(adddetailsController.adddetailsgetDataConntrollerfn);
router.route('/adddetails/update/:adddetails').patch(adddetailsController.updateadddetailsUserControllerFn);

// Add coordinators routes
router.route('/addcordinators/getAll').get(addcordinatorsController.addcordinatorsgetDataConntrollerfn);
router.route('/addcordinators/create').post(addcordinatorsController.addcordinatorscreateUserControllerFn);
router.route('/addcordinators/update/:id').patch(addcordinatorsController.addcordinatorsupdateUserController);
router.route('/addcordinators/delete/:id').delete(addcordinatorsController.addcordinatorsdeleteUserController);

// Add course routes
router.route('/addcourse/getAll').get(addCourseController.addcoursegetDataControllerFn);
router.route('/addcourse/create').post(addCourseController.addcoursecreateUserControllerFn);
router.route('/addcourse/update/:id').patch(addCourseController.addcourseupdateUserController);
router.route('/addcourse/delete/:id').delete(addCourseController.addcoursedeleteUserController);

// Add faculty routes
router.route('/addfaculty/getAll').get(addfacultyController.getDataConntrollerfn);
router.route('/addfaculty/create').post(addfacultyController.createaddfacultyControllerFn);
router.route('/addfaculty/update/:id').patch(addfacultyController.updateaddfacultyController);
router.route('/addfaculty/delete/:id').delete(addfacultyController.deleteaddfacultyController);

// Add class routes
router.route('/addclass/getAll').get(addclassController.getDataConntrollerfn);
router.route('/addclass/getSpecificClass').post(addclassController.getSpecificDataConntrollerfn);
router.route('/addclass/create').post(addclassController.createaddclassControllerFn);
router.route('/addclass/update/:id').patch(addclassController.updateaddclassController);
router.route('/addclass/delete/:id').delete(addclassController.deleteaddclassController);

// Login routes
router.route('/login').post(loginController.loginUserControllerFn);
router.route('/login/save').post(loginController.saveLoginControllerFn);
router.route('/addcoordinators/create').post(loginController.saveLoginControllerFn); // Add coordinators login document

// Add report routes
router.route('/addreport/getAll').get(addreportController.addreportgetDataControllerFn);
router.route('/addreport/create').post(addreportController.addreportcreateUserControllerFn);
router.route('/addreport/update/:id').patch(addreportController.addreportupdateUserController);
router.route('/addreport/delete/:id').delete(addreportController.addreportdeleteUserController);
router.route('/addreport/getByCladdIdAndDate').post(addreportController.addreportgetDateByCladdIdAndDateFn)
router.route('/addreport/editReportClassDetails/:id').post(addreportController.editReportClassDetails)

// Find classroom routes
router.route('/findclassroom/getAll').get(findclassroomController.getDataConntrollerfn);
router.route('/findclassroom/create').post(findclassroomController.createfindclassroomControllerFn);
router.route('/findclassroom/update/:id').patch(findclassroomController.updatefindclassroomController);
router.route('/findclassroom/delete/:id').delete(findclassroomController.deletefindclassroomController);







module.exports = router;
