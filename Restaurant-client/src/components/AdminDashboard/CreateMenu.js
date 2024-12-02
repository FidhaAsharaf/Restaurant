
import React, { useState, useEffect } from 'react';
import './CreateMenu.css';

const CreateMenu = () => {
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState('');
  const [foodType, setFoodType] = useState('');
  const [caption, setCaption] = useState('');
  const [description, setDescription] = useState('');
  const [dishName, setDishName] = useState('');
  const [menuItems, setMenuItems] = useState([]);

  // Handle file input for image
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

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

  // Submit the new menu item
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('dishName', dishName);
    formData.append('image', image);
    formData.append('price', price);
    formData.append('foodType', foodType);
    formData.append('caption', caption);
    formData.append('description', description);

    try {
      const response = await fetch('http://localhost:8000/api/menu/add', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        console.log('New Food Item:', data.newMenuItem);
        setDishName('');
        setImage(null);
        setPrice('');
        setFoodType('');
        setCaption('');
        setDescription('');
        fetchMenuItems(); // Refresh menu items after adding a new one
      } else {
        console.error('Error:', data.message);
      }
    } catch (error) {
      console.error('Failed to submit form:', error);
    }
  };

  // Fetch menu items on component mount
  useEffect(() => {
    fetchMenuItems();
  }, []);

  return (
    <>
    <div className="form-container">
      <h2>Add Food Item</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label>Dish Name:</label>
          <input
            type="text"
            value={dishName}
            onChange={(e) => setDishName(e.target.value)}
            placeholder="Enter dish name"
            required
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            required
          />
          {image && <p>{image.name}</p>}
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
            required
          />
        </div>
        <div>
          <label>Food Type:</label>
          <input
            type="text"
            value={foodType}
            onChange={(e) => setFoodType(e.target.value)}
            placeholder="Enter type of food"
            required
          />
        </div>
        <div>
          <label>Caption:</label>
          <input
            type="text"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Enter caption"
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            required
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      </div>
      {/* Display the menu items in a table */}
      <div className="table-container">
        <h2>Menu Items</h2>
        <table>
          <thead>
            <tr>
              <th>Dish Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Food Type</th>
              <th>Caption</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item) => (
              <tr key={item._id}>
                <td>{item.dishName}</td>
                <td>
                  <img
                    src={`http://localhost:8000/uploads/${item.image}`}
                    alt={item.dishName}
                    style={{ width: '50px' }}
                  />
                </td>
                <td>{item.price}</td>
                <td>{item.foodType}</td>
                <td>{item.caption}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
    </>
  );
};

export default CreateMenu;
