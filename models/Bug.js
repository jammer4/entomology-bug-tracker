const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BugSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    developer: {
        type: String,
        required: true
    }
});

module.exports = Bug = mongoose.model('bug', BugSchema);