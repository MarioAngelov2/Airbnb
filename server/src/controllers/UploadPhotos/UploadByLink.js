const imageDownloader = require("image-downloader");

const uploadByLink = async (req, res, next) => {
    try {
        const { link } = req.body;

        if (!link) {
            throw new Error('Invalid URL format')
        }

        let newName = "photo" + Date.now() + ".jpg";

        await imageDownloader.image({
            url: link,
            dest: __dirname + "/uploads/" + newName,
        });
        res.json(newName);
    } catch (error) {
        console.log('Error downloading image', error)
        next(error)
    }
};

module.exports = uploadByLink;
