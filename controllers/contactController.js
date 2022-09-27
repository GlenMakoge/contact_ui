const contactModel = require("../model/contactModel");

module.exports.getContact = async (req, res) => {
    const CONTACT = await contactModel.find();
    res.send(CONTACT);
}

module.exports.saveContact = async (req, res) => {
    const {text} = req.body;
    contactModel.create({text})
    .then(() => res.set(201).send("Added Succesfully..."))
    .catch((err) => console.log(err))
}

module.exports.deleteContact = (req, res) => {
    const {_id} = req.body;
    contactModel.findByIdAndDelete(_id)
    .then(() => res.set(201).send("Deleted Succesfully..."))
    .catch((err) => console.log(err))
}

module.exports.updateContact = (req, res) => {
    const {_id, text} = req.body;
    contactModel.findByIdAndUpdate(_id, {text})
    .then(() => res.set(201).send("Updated Succesfully..."))
    .catch((err) => console.log(err))
}