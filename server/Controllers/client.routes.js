const express = require("express");
const clientsController = express.Router();

const clientModel = require("../Models/Client.model");

clientsController.get("/", async (req, res) => {
    const { userId } = req.body;
    const clients = await clientModel.find({ userId });
    return res.status(200).send(clients);
});
clientsController.get("/:id", async (req, res) => {
    const { userId } = req.body;
    let { id } = req.params;
    const clients = await clientModel.findOne({ userId, _id: id });
    return res.status(200).send(clients);
});

clientsController.post("/create", async (req, res) => {
    const {
        clientName,
        contactPerson,
        email,
        phone,
        address,
        userId
    } = req.body;
    const newClient = new clientModel({
        clientName,
        contactPerson,
        email,
        phone,
        address,
        userId,
    });
    console.log(newClient);
    await newClient.save();
    return res
        .status(200)
        .send({ message: "Client Created successfully", newClient: newClient });
});

clientsController.patch("/:projectID/edit", async (req, res) => {
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

clientsController.delete("/:clientID/delete", async (req, res) => {
    const { clientID } = req.params;
    const { userId } = req.body;

    const client = await clientModel.findOne({ _id: clientID });

    if (client.userId === userId) {
        const deleted_client = await clientModel.findOneAndDelete({ _id: clientID }, { new: true });
        return res.status(200).send({ "message": "client deleted successfully", "project": deleted_client });
    }
    else {
        return res.status(404).send("client not found");
    }
});

module.exports = clientsController;
