const express = require("express");
const ProjectsController = express.Router();

const projectModel = require("../Models/Project.model");

ProjectsController.get("/", async (req, res) => {
    const { userId } = req.body;
    const projects = await projectModel.find({ userId });
    return res.status(200).send(projects);
});
ProjectsController.get("/:id", async (req, res) => {
    const { userId } = req.body;
    let { id } = req.params;
    const projects = await projectModel.findOne({ userId, _id: id });
    return res.status(200).send(projects);
});

ProjectsController.post("/create", async (req, res) => {
    const {
        projectName,
        client,
        description,
        userId,
        status,
    } = req.body;
    let startDate = new Date();
    const newProject = new projectModel({
        projectName,
        client,
        description,
        userId,
        startDate,
        status,
    });
    console.log(newProject);
    // return res.send("shusbhm");
    await newProject.save();
    return res
        .status(200)
        .send({ message: "project Created successfully", newProject: newProject });
});

ProjectsController.patch("/:projectID/edit", async (req, res) => {
    const { projectID } = req.params;
    const { userId } = req.body;

    const project = await projectModel.findOne({ _id: projectID });
    if (project.userId === userId) {
        const updated_project = await projectModel.findOneAndUpdate(
            { _id: projectID },
            req.body,
            { new: true }
        );
        return res
            .status(200)
            .send({ message: "todo updated successfully", todo: updated_project });
    } else {
        return res.status(404).send("todo not found");
    }
});

ProjectsController.delete("/:projectID/delete", async (req, res) => {
    const { projectID } = req.params;
    const { userId } = req.body;

    const project = await projectModel.findOne({ _id: projectID });

    if (project.userId === userId) {
        const deleted_project = await projectModel.findOneAndDelete({ _id: projectID }, { new: true });
        return res.status(200).send({ "message": "project deleted successfully", "project": deleted_project });
    }
    else {
        return res.status(404).send("project not found");
    }
});

module.exports = ProjectsController;
