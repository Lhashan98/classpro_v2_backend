var userService = require('./addcourseService');

var addcoursegetDataControllerFn = async (req, res) => {
    var user = await userService.getDataFromDBService();
    res.send({ "status": true, "data": user });
}

var addcoursecreateUserControllerFn = async (req, res) => {
    var status = await userService.createUserDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "User created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}

var addcourseupdateUserController = async (req, res) => {
    var result = await userService.updateUserDBService(req.params.id, req.body);

    if (result) {
        res.send({ "status": true, "message": "User updated successfully" });
    } else {
        res.send({ "status": false, "message": "Error updating user" });
    }
}

var addcoursedeleteUserController = async (req, res) => {
    var result = await userService.removeUserDBService(req.params.id);
    if (result) {
        res.send({ "status": true, "message": "User deleted successfully" });
    } else {
        res.send({ "status": false, "message": "Error deleting user" });
    }
}

module.exports = { addcoursegetDataControllerFn, addcoursecreateUserControllerFn, addcourseupdateUserController, addcoursedeleteUserController };