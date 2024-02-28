const addclassModel = require('./addclassModel');

module.exports.getDataFromDBService = () => {
    return addclassModel.find({}).exec();
}

module.exports.createaddclassDBService = (addclass) => {
    return new Promise((resolve, reject) => {
        addclassModel.create({
            buildingname: addclass.buildingname,
            ClassNumber: addclass.ClassNumber,
            capacity: addclass.capacity,
            ClassType: addclass.ClassType,
            availability: addclass.availability,
        })
        .then(() => {
            resolve(true);
        })
        .catch((error) => {
            console.error("Error while saving addclassModelData:", error);
            reject(new Error("Failed to save addclassModelData"));
        });
    });
}

module.exports.updateaddclassDBService = (id, addclassDetails) => {
    return new Promise((resolve, reject) => {
        addclassModel.findByIdAndUpdate(id, addclassDetails, { new: true })
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports.removeaddclassDBService = (id) => {
    return new Promise((resolve, reject) => {
        addclassModel.findByIdAndDelete(id)
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports.updateAvailability = async (classNumber, availability) => {
    try {
        const result = await addclassModel.findOneAndUpdate(
            { ClassNumber: classNumber },
            { availability: availability },
            { new: true }
        );
        return result;
    } catch (error) {
        throw error;
    }
};
