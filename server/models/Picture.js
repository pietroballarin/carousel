const {Schema, model} = require('mongoose');

const pictureSchema = new Schema(
    {
        title: String,
        image : {
            imgUrl: String,
            cloudinaryId: String
        }
    },
    { timestamps: true }
);

const Picture = model('Picture', pictureSchema);

module.exports = Picture;