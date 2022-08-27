const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    projectName: { type: String, required: true },
    client: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: String, required: true },
    startDate: { type: String },
    status: { type: String, required: true }
});

const projectModel = mongoose.model("project", projectSchema);

module.exports = projectModel;