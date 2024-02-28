// userService.js
var userModel = require('./addcourseModel');

module.exports.getDataFromDBService = () => {
    return userModel.find({}).exec();
}

module.exports.createUserDBService = (userDetails) => {
    return new Promise(function myFn(resolve, reject) {
        var userModelData = new userModel();

       
        userModelData.department = userDetails.department;
        userModelData.course_name = userDetails.course_name;
        // userModelData.Batch = userDetails.Batch;
        userModelData.CourseCode = userDetails.CourseCode;
        // userModelData.capacity = userDetails.capacity;
        userModelData.discription = userDetails.discription;

        userModelData.save()
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports.updateUserDBService = (id, userDetails) => {
    return new Promise(function myFn(resolve, reject) {
        userModel.findByIdAndUpdate(id, userDetails, { new: true })
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports.removeUserDBService = (id) => {
    return new Promise(function myFn(resolve, reject) {
        userModel.findByIdAndDelete(id)
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}