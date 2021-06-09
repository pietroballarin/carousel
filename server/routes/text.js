const router = require('express').Router();
const Text = require('../models/Text');

router.post('/addText', (req, res, next) => {
    const { title } = req.body;
    Text.create({
        title: title,
    })
    .then(uploadedTitle => {
        console.log(uploadedTitle)
        res.status(200).json(uploadedTitle)
    })
    .catch(err => res.status(400).json(err))
})

module.exports = router;