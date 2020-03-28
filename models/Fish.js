const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema
const FishSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Fish = mongoose.model('fish', FishSchema);