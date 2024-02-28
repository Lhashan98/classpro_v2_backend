const addfacultyModel = require('./addfacultyModel');

module.exports.getDataFromDBService = () => {
    return addfacultyModel.find({}).exec();
}

module.exports.createaddfacultyDBService = (addfaculty) => {
    return new Promise((resolve, reject) => {
        addfacultyModel.create({
            faculty: addfaculty.faculty,
            department: addfaculty.department,
            userInput: addfaculty.userInput,
        })
        .then(() => {
            resolve(true);
        })
        .catch((error) => {
            console.error("Error while saving addfacultyModelData:", error);
            reject(new Error("Failed to save addfacultyModelData"));
        });
    });
}

module.exports.updateaddfacultyDBService = (id, addfacultyDetails) => {
    return new Promise((resolve, reject) => {
        addfacultyModel.findByIdAndUpdate(id, addfacultyDetails, { new: true })
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports.removeaddfacultyDBService = (id) => {
    return new Promise((resolve, reject) => {
        addfacultyModel.findByIdAndDelete(id)
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}
