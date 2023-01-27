const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const pirateSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "What the pirate's name?"]
    },
    url: {
        type: String,
        required: [true, "I can't see your pirate lol. Please have an image url."]
    },
    treasure: {
        type: Number,
        required: [true, "Please input the number of treasure of this pirate!"],
        min: [0, "The number of treasure should not be negative!"],
    },
    catchPhrase: {
        type: String,
        required: [true, "What's your pirate's catch phrase?"],
    },
    position: {
        type: String,
        required: [true, "What's your pirate's crew position?"],
    },
    leg: {
        type: Boolean,
        default: true,
    },
    eye: {
        type: Boolean,
        default: true,
    },
    hand: {
        type: Boolean,
        default: true,
    }}, { timestamps: true });

const Pirate = mongoose.model('author', pirateSchema.plugin(uniqueValidator));

module.exports = Pirate;