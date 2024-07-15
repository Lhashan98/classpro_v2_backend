// userService.js
var userModel = require('./addreportModel');
var addclassModel = require('../addclass/addclassModel');


module.exports.getDataFromDBService = () => {
    return userModel.find({}).exec();
}

module.exports.createUserDBService = (userDetails) => {
    return new Promise(function myFn(resolve, reject) {
        var userModelData = new userModel();

        userModelData.department = userDetails.department;
        userModelData.course = userDetails.course;
        userModelData.module = userDetails.module;
        userModelData.batch = userDetails.batch;
        userModelData.capacity = userDetails.capacity;
        userModelData.nameofbuilding = userDetails.nameofbuilding;
        userModelData.typeofclass = userDetails.typeofclass;
        userModelData.requestdate = userDetails.requestdate;
        userModelData.starttime = userDetails.starttime;
        userModelData.endtime = userDetails.endtime;
        userModelData.availableclass = userDetails.availableclass;
        userModelData.ClassNumber = userDetails.ClassNumber;
        userModelData.State = userDetails.State;

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

module.exports.getDataFromDBServiceByDate = (availableclass, requestdate, starttime, endtime) => {
    return userModel.find({
        availableclass: availableclass,
        requestdate: requestdate,
        $or: [
            {
                $and: [
                    { starttime: { $lt: endtime } },
                    { endtime: { $gt: starttime } }
                ]
            },
            {
                $and: [
                    { starttime: { $gte: starttime } },
                    { endtime: { $lte: endtime } }
                ]
            }
        ]
    }).exec();
};

module.exports.updateClassNumberAndID = async (classNumber) => {
    try {
        const classDetails = await addclassModel.findOne({ ClassNumber: classNumber });

        if (!classDetails) {
            return { success: false, message: 'New class number not found' };
        }

        const newClassID = classDetails._id;

        await addclassModel.updateMany(
            { ClassNumber: classNumber,
                availableclass: newClassID },
        
        );

        return { success: true, message: 'Class number and corresponding ID updated successfully',newClassID };
    } catch (error) {
        console.error('Error updating class number and corresponding ID:', error);
        return { success: false, message: 'Error updating class number and corresponding ID' };
    }
};
