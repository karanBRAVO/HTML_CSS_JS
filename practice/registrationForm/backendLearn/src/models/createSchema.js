const mongoose = require('mongoose');

const learnDb = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    }
})

const Data = new mongoose.model('Data', learnDb);

module.exports = Data;