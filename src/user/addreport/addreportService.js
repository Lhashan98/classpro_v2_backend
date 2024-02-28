// userService.js
var userModel = require('./addreportModel');

module.exports.getDataFromDBService = () => {
    return userModel.find({}).exec();
}

module.exports.createUserDBService = (userDetails) => {
    return new Promise(function myFn(resolve, reject) {
        var userModelData = new userModel();

        
        userModelData.department = userDetails.department;
        userModelData.course = userDetails.course;
        userModelData.module = userDetails.module;
        userModelData. batch = userDetails. batch;
        userModelData.capacity = userDetails.capacity;
        userModelData.nameofbuilding = userDetails.nameofbuilding;
        userModelData.typeofclass = userDetails.typeofclass;
        userModelData.requestdate = userDetails.requestdate;
        userModelData.starttime = userDetails.starttime;
        userModelData.endtime = userDetails.endtime;
        userModelData.availableclass = userDetails.availableclass;
        userModelData.State  = userDetails.State;
       

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