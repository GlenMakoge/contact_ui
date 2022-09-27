const {Router} = require("express");

const router = Router();

const {getContact, saveContact, deleteContact, updateContact} = require("../controllers/contactController");

router.get("/get-contact", getContact);
router.post("/save-contact", saveContact);
router.post("/delete-contact", deleteContact);
router.post("/update-contact", updateContact);

module.exports = router;