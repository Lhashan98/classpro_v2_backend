const userModel = require('./addcordinatorsModel');

module.exports.getDataFromDBService = async () => {
    try {
        const result = await userModel.find({});
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports.createUserDBService = async (userDetails) => {
    try {
        const userModelData = new userModel({
           
            enumber: userDetails.enumber,
            name: userDetails.name,
            email: userDetails.email,
            department: userDetails.department,
            telephone: userDetails.telephone,
            password: userDetails.password
           
           
        });

        // Save the user data
        await userModelData.save();

        // Resolve with true if successful
        return true;
    } catch (error) {
        // Reject with false if there is an error
        throw error;
    }
};

module.exports.updateUserDBService = async (id, userDetails) => {
    try {
        const result = await userModel.findByIdAndUpdate(id, userDetails);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports.removeUserDBService = async (id) => {
    try {
        const result = await userModel.findByIdAndDelete(id);
        return result;
    } catch (error) {
        throw error;
    }
};
