const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questSchema = new Schema({
    course: {
        type: String,
        require: true
    },
    question: {
        type: String,
        required: true
    },
     answer: {
        type: String,
        required: false
    }
}, { timestamps: true });

const Quest = mongoose.model('Quest', questSchema);
module.exports = Quest;