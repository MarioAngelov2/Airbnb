const imageDownloader = require("image-downloader");

const uploadByLink = async (req, res) => {
    const { link } = req.body;

    let newName = "photo" + Date.now() + ".jpg";

    await imageDownloader.image({
        url: link,
        dest: __dirname + "/uploads/" + newName,
    });
    res.json(newName);
};

module.exports = uploadByLink;
