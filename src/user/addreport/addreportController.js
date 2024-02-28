var userService = require('./addreportService');

var addreportgetDataControllerFn = async (req, res) => {
    try {
        var user = await userService.getDataFromDBService();
        res.send({ "status": true, "data": user });
    } catch (error) {
        console.error('Error getting user data:', error);
        res.status(500).send({ "status": false, "message": "Error getting user data" });
    }
}

var addreportcreateUserControllerFn = async (req, res) => {
    try {
        var status = await userService.createUserDBService(req.body);
        res.send({ "status": true, "message": "User created successfully" });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send({ "status": false, "message": "Error creating user" });
    }
}

var addreportupdateUserController = async (req, res) => {
    try {
        var result = await userService.updateUserDBService(req.params.id, req.body);
        res.send({ "status": true, "message": "User updated successfully" });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).send({ "status": false, "message": "Error updating user" });
    }
}

var addreportdeleteUserController = async (req, res) => {
    try {
        var result = await userService.removeUserDBService(req.params.id);
        res.send({ "status": true, "message": "User deleted successfully" });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send({ "status": false, "message": "Error deleting user" });
    }
}

module.exports = { addreportgetDataControllerFn, addreportcreateUserControllerFn, addreportupdateUserController, addreportdeleteUserController };
