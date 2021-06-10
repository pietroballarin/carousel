const router = require('express').Router();
const Text = require('../models/Text');

router.post('/addText', (req, res, next) => {
    console.log(req.body)
    const { title, description } = req.body;
    Text.create({
        title: title,
        description: description
    })
    .then(uploadedTitle => {
        console.log(uploadedTitle)
        res.status(200).json(uploadedTitle)
    })
    .catch(err => res.status(400).json(err))
})

module.exports = router;