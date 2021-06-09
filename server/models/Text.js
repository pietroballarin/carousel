const {Schema, model} = require('mongoose');

const textSchema = new Schema(
    {
        title: String,
        description: String
        }
);

const Text = model('Text', textSchema);

module.exports = Text;