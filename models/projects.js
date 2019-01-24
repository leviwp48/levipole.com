const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema
// This is a Schema to use with Mongoose with mongoDB
const ProjectSchema = new Schema({
    // The name is type string and is required
    name: {
        type: String,
        required: true
    },
    // The category is type String and the default is "Experimental"
    category: {
        type: String,
        default: "Programming"
    }
});

// This exports the module as Project, which uses this Schema
module.exports = Project = mongoose.model('project', ProjectSchema);