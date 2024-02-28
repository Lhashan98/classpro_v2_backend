var express = require('express');
const router = express.Router();
var userController = require('../src/user/userController');

router.route('/user/getAll').get(userController.getDataConntrollerfn);
router.route('/user/create').post(userController.createUserControllerFn);
router.route('/user/update/:id').patch(userController.updateUserController);
router.route('/user/delete/:id').delete(userController.deleteUserController);

module.exports = router;


//add details routes

var adddetailsController = require('../src/user/adddetails/adddetailsController');



router.route('/adddetails/create').post(adddetailsController.adddetailscreateUserControllerFn);
router.route('/adddetails/getAll').get(adddetailsController.adddetailsgetDataConntrollerfn);
router.route('/adddetails/update/:adddetails').patch(adddetailsController.updateadddetailsUserControllerFn);
module.exports = router;


//add cordinators routes


var express = require('express');


var addcordinatorsController = require('../src/user/addcordinators/addcordinatorsController');

router.route('/addcordinators/getAll').get(addcordinatorsController.addcordinatorsgetDataConntrollerfn);

router.route('/addcordinators/create').post(addcordinatorsController.addcordinatorscreateUserControllerFn);

router.route('/addcordinators/update/:id').patch(addcordinatorsController.addcordinatorsupdateUserController);

router.route('/addcordinators/delete/:id').delete(addcordinatorsController.addcordinatorsdeleteUserController);

module.exports = router;


//Add course 

var express = require('express');



var addCourseController = require('../src/user/addcourse/addcourseController');

router.route('/addcourse/getAll').get(addCourseController.addcoursegetDataControllerFn);

router.route('/addcourse/create').post(addCourseController.addcoursecreateUserControllerFn);

router.route('/addcourse/update/:id').patch(addCourseController.addcourseupdateUserController);

router.route('/addcourse/delete/:id').delete(addCourseController.addcoursedeleteUserController);

module.exports = router; 

//add faculty

var addfacultyController = require('../src/user/addfaculty/addfacultyController');

router.route('/addfaculty/getAll').get(addfacultyController.getDataConntrollerfn);

router.route('/addfaculty/create').post(addfacultyController.createaddfacultyControllerFn);

router.route('/addfaculty/update/:id').patch(addfacultyController.updateaddfacultyController);

router.route('/addfaculty/delete/:id').delete(addfacultyController.deleteaddfacultyController);

module.exports = router;


//add class

var addclassController = require('../src/user/addclass/addclassController');


router.route('/addclass/getAll').get(addclassController.getDataConntrollerfn);

router.route('/addclass/create').post(addclassController.createaddclassControllerFn);

router.route('/addclass/update/:id').patch(addclassController.updateaddclassController);

router.route('/addclass/delete/:id').delete(addclassController.deleteaddclassController);

//login

const loginController = require('../src/user/login/loginController');
router.route('/login').post(loginController.loginUserControllerFn);
router.route('/login/save').post(loginController.saveLoginControllerFn);
//add cordinator login document

router.route('/addcoordinators/create').post(loginController.saveLoginControllerFn);


//add report

var addreportController = require('../src/user/addreport/addreportController');


router.route('/addreport/getAll').get(addreportController.addreportgetDataControllerFn);

router.route('/addreport/create').post(addreportController.addreportcreateUserControllerFn);

router.route('/addreport/update/:id').patch(addreportController.addreportupdateUserController);

router.route('/addreport/delete/:id').delete(addreportController.addreportdeleteUserController);







// find classroom

var findclassroomController = require('../src/user/findclassroom/findclassroomController');
var express = require('express');


router.route('/findclassroom/getAll').get(findclassroomController.getDataConntrollerfn);
router.route('/findclassroom/create').post(findclassroomController.createfindclassroomControllerFn);
router.route('/findclassroom/update/:id').patch(findclassroomController.updatefindclassroomController);
router.route('/findclassroom/delete/:id').delete(findclassroomController.deletefindclassroomController);

module.exports = router;


