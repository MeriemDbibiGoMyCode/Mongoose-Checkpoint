const contactSchema = require("../model/contact");
exports.getContacts = async (req, res) => {
  try {
    const contacts = await contactSchema.find();
    res.status(200).send({ msg: "voici la liste des contacts", contacts });
  } catch (err) {
    res.status(500).send({
      msg: "erreur vous ne pouvez pas afficher la liste des contacts",
    });
  }
};

exports.addContact = async (req, res) => {
  try {
    const newContact = new contactSchema(req.body);
    await newContact.save();
    res
      .status(200)
      .send({ msg: "Ajout fini: voici le nouveau contact:", newContact });
  } catch (err) {
    res.status(500).send({ msg: "erreur vous ne pouvez pas ajouter" });
  }
};

exports.updateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedContact = await contactSchema.findByIdAndUpdate(id, {
      $set: { ...req.body },
    });
    res
      .status(200)
      .send({ msg: "Put/Update fini: voici le resultat " }, updatedContact);
  } catch (err) {
    res.status(500).send({ msg: "erreur put/update" });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteContact = await contactSchema.findByIdAndDelete(id);
    res.status(200).send({ msg: "Suppression effectuee" });
  } catch (err) {
    res.status(500).send({ msg: "erreur suppression" });
  }
};

exports.getUniqueContact = async (req, res) => {
  try {
    const { id } = req.params;
    const getUniqueContact = await contactSchema.findById(id);
    res
      .status(200)
      .send({ msg: "voici ton contact unique ", getUniqueContact });
  } catch (err) {}
};
