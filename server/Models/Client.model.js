const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    clientName: { type: String, required: true },
    contactPerson: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    userId: { type: String, required: true }
});

const clientModel = mongoose.model("client", clientSchema);

module.exports = clientModel;