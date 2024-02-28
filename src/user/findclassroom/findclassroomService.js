const findclassroomModel = require('./findclassroomModel');

module.exports.getDataFromDBService = () => {
  return findclassroomModel.find({}).exec();
}

module.exports.createfindclassroomDBService = (findclassroom) => {
  return new Promise((resolve, reject) => {
    findclassroomModel.create({
      
      department: findclassroom.department,
      course: findclassroom.course,
      module: findclassroom.module,
      batch: findclassroom.batch,
      capacity: findclassroom.capacity,
      name_of_building: findclassroom.name_of_building,
      type_of_class: findclassroom.type_of_class,
      request_date: findclassroom.request_date,
      start_time: findclassroom.start_time,
      end_time: findclassroom.end_time,
      availableclass: findclassroom.availableclass,
    })
    .then(() => {
      resolve(true);
    })
    .catch((error) => {
      console.error("Error while saving findclassroomModelData:", error);
      reject(new Error("Failed to save findclassroomModelData"));
    });
  });
}

module.exports.updatefindclassroomDBService = (id, findclassroomDetails) => {
  return new Promise((resolve, reject) => {
    findclassroomModel.findByIdAndUpdate(id, findclassroomDetails, { new: true })
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
  });
}

module.exports.removefindclassroomDBService = (id) => {
  return new Promise((resolve, reject) => {
    findclassroomModel.findByIdAndDelete(id)
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
  });
}
