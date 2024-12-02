import React, { useEffect, useState } from 'react';

const ViewContact = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/contact/all');
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contact messages:', error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDeleteContact = async (contactId) => {
    if (!window.confirm('Are you sure you want to delete this contact?')) return;

    try {
      const response = await fetch(`http://localhost:8000/api/contact/${contactId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Contact deleted successfully');
        fetchContacts(); // Refresh list after deletion
      } else {
        console.error('Failed to delete contact');
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <div>
      <h2>Contact Messages</h2>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Date</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <tr key={contact._id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.message}</td>
                <td>{new Date(contact.date).toLocaleDateString()}</td>
                {/* <td>
                  <button onClick={() => handleDeleteContact(contact._id)}>Delete</button>
                </td> */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No contact messages available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewContact;
