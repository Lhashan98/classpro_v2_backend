var findclassroomService = require('./findclassroomService');

var getDataConntrollerfn = async (req, res) => {
  var Class = await findclassroomService.getDataFromDBService();
  res.send({ "status": true, "data": Class });
}

var createfindclassroomControllerFn = async (req, res) => {
  var status = await findclassroomService.createfindclassroomDBService(req.body);
  if (status) {
    res.send({ "status": true, "message": "findclassroom successfully" });
  } else {
    res.send({ "status": false, "message": "Error creating findclassroom" });
  }
}

var updatefindclassroomController = async (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
   
  var result = await findclassroomService.updatefindclassroomDBService(req.params.id, req.body);

  if (result) {
    res.send({ "status": true, "message": "findclassroom Updated" } );
  } else {
    res.send({ "status": false, "message": "findclassroom Update Failed" });
  }
}

var deletefindclassroomController = async (req, res) => {
  console.log(req.params.id);
  var result = await findclassroomService.removefindclassroomDBService(req.params.id);
  if (result) {
    res.send({ "status": true, "message": "findclassroom Deleted" } );
  } else {
    res.send({ "status": false, "message": "findclassroom Deletion Failed" });
  }
}

module.exports = { getDataConntrollerfn, createfindclassroomControllerFn, updatefindclassroomController, deletefindclassroomController };
