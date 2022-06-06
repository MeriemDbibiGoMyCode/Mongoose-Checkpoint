const express = require("express");
const contactRouter = express.Router();
const {
  getContacts,
  addContact,
  updateContact,
  deleteContact,
  getUniqueContact,
} = require("../controllers/contact");

//Route getAll contacts
contactRouter.get("/", getContacts);
//Route Post a contact
contactRouter.post("/", addContact);
//Route Put or Update a contact -> id
contactRouter.put("/:id", updateContact);
//Route Delete a contact -> id
contactRouter.delete("/:id", deleteContact);
// Route Get Unique contact ->id
contactRouter.get("/:id", getUniqueContact);

module.exports = contactRouter;
