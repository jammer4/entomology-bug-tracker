const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeadBugSchema = new Schema({
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

module.exports = DeadBug = mongoose.model('deadBug', DeadBugSchema);