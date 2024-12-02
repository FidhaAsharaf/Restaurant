import React, { useEffect, useState } from 'react';

const ViewUsers = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/user/all');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;

    try {
      const response = await fetch(`http://localhost:8000/api/user/${userId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('User deleted successfully');
        fetchUsers(); // Refresh list after deletion
      } else {
        console.error('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h2>User List</h2>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Email</th>
            <th>Username</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id}>
                <td>{user.email}</td>
                <td>{user.username}</td>
                {/* <td>
                  <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
                </td> */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No users available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewUsers;
