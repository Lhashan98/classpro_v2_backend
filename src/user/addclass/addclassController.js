var addclassService = require('./addclassService');

var getDataConntrollerfn = async (req, res) => {
    try {
        var Class = await addclassService.getDataFromDBService();
        res.send({ "status": true, "data": Class });
    } catch (error) {
        console.error('Error fetching class data:', error);
        res.status(500).send({ "status": false, "message": "Internal server error" });
    }
}

var getSpecificDataConntrollerfn = async (req, res) => {
    try {
        var classes = await addclassService.getDataFromDBService();
        
        // Assuming query parameters are used instead of the request body
        const { capacity, buildingname, ClassType } = req.body;

        // Filter classes based on the query parameters
        var filteredClasses = classes.filter(cls => 
             cls.capacity >= capacity &&
             cls.buildingname === buildingname &&
             cls.ClassType === ClassType
        );

        res.send({ "status": true, "data": filteredClasses });
    } catch (error) {
        console.error('Error fetching class data:', error);
        res.status(500).send({ "status": false, "message": "Internal server error" });
    }
}
var createaddclassControllerFn = async (req, res) => {
    try {
        var status = await addclassService.createaddclassDBService(req.body);
        res.send({ "status": true, "message": "Class created successfully" });
    } catch (error) {
        console.error('Error creating class:', error);
        res.status(500).send({ "status": false, "message": "Error creating class" });
    }
}

var updateaddclassController = async (req, res) => {
    try {
        console.log(req.params.id);
        console.log(req.body);
         
        var result = await addclassService.updateaddclassDBService(req.params.id, req.body);
    
         if (result) {
            res.send({ "status": true, "message": "Class updated successfully" });
         } else {
             res.send({ "status": false, "message": "Failed to update class" });
         }
    } catch (error) {
        console.error('Error updating class:', error);
        res.status(500).send({ "status": false, "message": "Internal server error" });
    }
}

var deleteaddclassController = async (req, res) => {
    try {
        console.log(req.params.id);
        var result = await addclassService.removeaddclassDBService(req.params.id);
        if (result) {
            res.send({ "status": true, "message": "Class deleted successfully" });
        } else {
            res.send({ "status": false, "message": "Failed to delete class" });
        }
    } catch (error) {
        console.error('Error deleting class:', error);
        res.status(500).send({ "status": false, "message": "Internal server error" });
    }
}

module.exports = { getDataConntrollerfn, createaddclassControllerFn, updateaddclassController, deleteaddclassController,getSpecificDataConntrollerfn };
