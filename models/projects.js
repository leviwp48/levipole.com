const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema
const ProjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        default: "Messin' around"
    }
});

module.exports = Project = mongoose.model('project', ProjectSchema);