// UpdateMenu.jsx
import React, { useState, useEffect } from 'react';
import './UpdateMenu.css';

const UpdateMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  // Fetch menu items from the backend
  const fetchMenuItems = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/menu/view');
      const data = await response.json();
      setMenuItems(data);
    } catch (error) {
      console.error('Failed to fetch menu items:', error);
    }
  };

  // Delete menu item
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;

    try {
      const response = await fetch(`http://localhost:8000/api/menu/delete/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (response.ok) {
        alert('Item deleted successfully');
        fetchMenuItems(); // Refresh the list after deletion
      } else {
        console.error('Error deleting item:', data.message || 'Unknown error');
        alert(data.message || 'Failed to delete item');
      }
    } catch (error) {
      console.error('Failed to delete item:', error);
    }
  };

  // Set the item to edit
  const handleEdit = (item) => {
    setEditingItem({ ...item }); // Create a copy to avoid direct state mutation
  };

  // Submit the updated item
  const handleUpdate = async (e) => {
    e.preventDefault();
    const { _id, dishName, price, foodType, caption, description, image } = editingItem;

    const formData = new FormData();
    formData.append('dishName', dishName);
    formData.append('price', price);
    formData.append('foodType', foodType);
    formData.append('caption', caption);
    formData.append('description', description);
    if (image instanceof File) {
      formData.append('image', image);
    }

    try {
      const response = await fetch(`http://localhost:8000/api/menu/update/${_id}`, {
        method: 'PUT',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        alert('Item updated successfully');
        setEditingItem(null); // Close the edit form
        fetchMenuItems(); // Refresh the list after update
      } else {
        console.error('Error updating item:', data.message || 'Unknown error');
        alert(data.message || 'Failed to update item');
      }
    } catch (error) {
      console.error('Failed to update item:', error);
    }
  };

  // Fetch menu items on component mount
  useEffect(() => {
    fetchMenuItems();
  }, []);

  return (
    <div className="menu-container">
      <h2>Menu Items</h2>

      {/* Table displaying menu items */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Dish Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Food Type</th>
              <th>Caption</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item) => (
              <tr key={item._id}>
                <td>{item.dishName}</td>
                <td>
                  {item.image ? (
                    <img
                      src={`http://localhost:8000/${item.image}`} // Corrected path
                      alt={item.dishName}
                      style={{ width: '50px' }}
                    />
                  ) : (
                    'No Image'
                  )}
                </td>
                <td>${item.price.toFixed(2)}</td>
                <td>{item.foodType}</td>
                <td>{item.caption}</td>
                <td>{item.description}</td>
                <td>
                  <button onClick={() => handleEdit(item)}>Edit</button>
                  <button onClick={() => handleDelete(item._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit form for updating an item */}
      {editingItem && (
        <div className="edit-form-container">
          <h3>Edit Menu Item</h3>
          <form onSubmit={handleUpdate} encType="multipart/form-data">
            <div>
              <label>Dish Name:</label>
              <input
                type="text"
                value={editingItem.dishName}
                onChange={(e) => setEditingItem({ ...editingItem, dishName: e.target.value })}
                placeholder="Enter dish name"
                required
              />
            </div>
            <div>
              <label>Price:</label>
              <input
                type="number"
                value={editingItem.price}
                onChange={(e) => setEditingItem({ ...editingItem, price: parseFloat(e.target.value) })}
                placeholder="Enter price"
                required
                step="0.01"
              />
            </div>
            <div>
              <label>Food Type:</label>
              <input
                type="text"
                value={editingItem.foodType}
                onChange={(e) => setEditingItem({ ...editingItem, foodType: e.target.value })}
                placeholder="Enter food type"
                required
              />
            </div>
            <div>
              <label>Caption:</label>
              <input
                type="text"
                value={editingItem.caption}
                onChange={(e) => setEditingItem({ ...editingItem, caption: e.target.value })}
                placeholder="Enter caption"
                required
              />
            </div>
            <div>
              <label>Description:</label>
              <textarea
                value={editingItem.description}
                onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                placeholder="Enter description"
                required
              />
            </div>
            <div>
              <label>Image:</label>
              <input
                type="file"
                onChange={(e) => setEditingItem({ ...editingItem, image: e.target.files[0] })}
                accept="image/*"
              />
              {/* Show existing image if no new image is selected */}
              {editingItem.image && typeof editingItem.image === 'string' && (
                <img src={`http://localhost:8000/${editingItem.image}`} alt="Current" style={{ width: '50px' }} />
              )}
              {/* Show preview of new image */}
              {editingItem.image && editingItem.image instanceof File && (
                <img src={URL.createObjectURL(editingItem.image)} alt="Preview" style={{ width: '50px' }} />
              )}
            </div>
            <button type="submit">Update Item</button>
            <button type="button" onClick={() => setEditingItem(null)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateMenu;
