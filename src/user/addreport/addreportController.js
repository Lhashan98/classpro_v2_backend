var userService = require('./addreportService');

var addreportgetDataControllerFn = async (req, res) => {
    try {
        var department = req.query.department; // get department from query parameters
        var user = await userService.getDataFromDBService(department);
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

var addreportgetDateByCladdIdAndDateFn = async (req, res)=>{
    try{
        var user = await userService.getDataFromDBServiceByDate(req.body.availableclass,req.body.requestdate, req.body.starttime, req.body.endtime);
        res.send({"status":true,"date":user})
    }catch(error){
        console.error('Error getting user data:', error);
        res.status(500).send({ "status": false, "message": "Error getting user data" });
    }
}

var editReportClassDetails = async (req, res)=>{
    try{
        var user = await userService.getDataFromDBService(req.body.classNumber);

        var result = await userService.updateUserDBService(req.params.id, req.body.classNumber,user._id);
        res.send({"status": true, "message": "Report Edited Successfully" })
    }catch(error){
        console.error('Error getting user data:', error);
        res.status(500).send({ "status": false, "message": "Error getting report" });
    }
}

module.exports = { addreportgetDataControllerFn, addreportcreateUserControllerFn, addreportupdateUserController, addreportdeleteUserController,addreportgetDateByCladdIdAndDateFn,editReportClassDetails };
