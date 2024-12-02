// contact-controller.js
const Contact = require('../models/contact-model.js');

// Create a new contact entry
exports.createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Create new contact instance
    const newContact = new Contact({
      name,
      email,
      message
    });

    // Save to database
    await newContact.save();
    res.status(201).json({ message: 'Contact submitted successfully!' });
  } catch (error) {
    console.error('Error occurred while saving contact:', error);  // Detailed error logging
    res.status(500).json({ error: 'Failed to submit contact information.' });
  }
};
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find(); // Retrieve all contact messages
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching contact messages:', error);
    res.status(500).json({ error: 'Failed to retrieve contact messages.' });
  }
};
exports.deleteContact = async (req, res) => {
  const { contactId } = req.params;

  try {
    const contact = await Contact.findByIdAndDelete(contactId);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({ error: 'Failed to delete contact' });
  }
};