const fs = require("fs");

const uploadPhotoFromDevice = async (req, res, next) => {
    try {
        const uploadedFiles = [];
        for (let i = 0; i < req.files.length; i++) {
            const { path, originalname } = req.files[i];
            const parts = originalname.split(".");
            console.log(parts);
            const extension = parts[parts.length - 1];
            const newPath = path + "." + extension;
            fs.renameSync(path, newPath);
            uploadedFiles.push(
                newPath.replace(
                    "/Users/marioangelov/Desktop/Airbnb/server/assets/uploads/",
                    ""
                )
            );
        }
        res.json(uploadedFiles);
    } catch (error) {
        next(error)
    }
};

module.exports = uploadPhotoFromDevice;
