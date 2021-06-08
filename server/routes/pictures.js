const router = require('express').Router();
const Picture = require('../models/Picture');
const uploader = require('../config/cloudinary');

router.post('/', uploader.single('imgUrl'), (req, res, next) => {
    const { title } = req.body;
    Picture.create({
        title: title,
        image: {imgUrl: req.file.path}
    })
    .then(uploadedPicture => {
        console.log(uploadedPicture)
        res.status(200).json(uploadedPicture)
    })
    .catch(err => res.status(400).json(err))
})

module.exports = router;