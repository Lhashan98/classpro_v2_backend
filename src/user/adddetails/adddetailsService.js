const { model } = require('mongoose');
var userModel = require('./adddetailsModel');

module.exports.getDataFromDBService = () => {
    return userModel.find({})
        .then(result => result)
        .catch(error => {
            throw error;
        });
}

module.exports.createUserDBService = (userDetails) => {
    var userModelData = new userModel();

    userModelData.adddetails = userDetails.adddetails;
    userModelData.department = userDetails.department;
    
    

    return userModelData.save()
        .then(result => true)
        .catch(error => {
            throw error;
        });
}

module.exports.updateUserDBService = (id, userDetails) => {
    return userModel.findByIdAndUpdate(id, userDetails, { new: true })
        .then(result => result)
        .catch(error => {
            throw error;
        });
}

module.exports.removeUserDBService = (id) => {
    return userModel.findByIdAndDelete(id)
        .then(result => result)
        .catch(error => {
            throw error;
        });
}

