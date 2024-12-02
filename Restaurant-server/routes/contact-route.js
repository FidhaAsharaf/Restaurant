const express = require('express');
const router = express.Router();
const { createContact, getAllContacts, deleteContact } = require('../controllers/contact-controller.js');

router.post('/', createContact);
router.get('/all', getAllContacts);

// Route to delete a contact by ID
router.delete('/:contactId', deleteContact);

module.exports = router;
