var addfacultyService = require('./addfacultyService');

var getDataConntrollerfn = async (req, res) =>
{
    var Class = await addfacultyService.getDataFromDBService();
    res.send({ "status": true, "data": Class });
}

var createaddfacultyControllerFn = async (req, res) => 
{
    var status = await addfacultyService.createaddfacultyDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "addfaculty created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating addfaculty" });
    }
}

var updateaddfacultyController = async (req, res) => 
{
    console.log(req.params.id);
    console.log(req.body);
     
    var result = await addfacultyService.updateaddfacultyDBService(req.params.id,req.body);

     if (result) {
        res.send({ "status": true, "message": "addfaculty Updateeeedddddd"} );
     } else {
         res.send({ "status": false, "message": "addfaculty Updateeeedddddd Faileddddddd" });
     }
}

var deleteaddfacultyController = async (req, res) => 
{
     console.log(req.params.id);
     var result = await addfacultyService.removeaddfacultyDBService(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "addfaculty Deleteddd"} );
     } else {
         res.send({ "status": false, "message": "addfaculty Deleteddd Faileddddddd" });
     }
}
module.exports = { getDataConntrollerfn, createaddfacultyControllerFn,updateaddfacultyController,deleteaddfacultyController };