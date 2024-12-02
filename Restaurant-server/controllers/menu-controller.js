// controllers/menu-controller.js
const mongoose = require('mongoose');
const Menu = require('../models/menu-model.js');
const path = require('path');
const fs = require('fs');
const { ObjectId } = mongoose.Types;

// Add a new menu item
const addMenuItem = async (req, res) => {
  try {
    const { dishName, price, foodType, caption, description } = req.body;
    const image = req.file ? `uploads/${req.file.filename}` : '';

    const newMenuItem = new Menu({
      dishName,
      image,
      price,
      foodType,
      caption,
      description,
    });

    await newMenuItem.save();
    res.status(201).json({ newMenuItem });
  } catch (error) {
    console.error('Error adding menu item:', error);
    res.status(500).json({ message: 'Failed to add menu item', error: error.message });
  }
};

// Get all menu items
const getMenuItems = async (req, res) => {
  try {
    const menuItems = await Menu.find(); // Fetch all menu items
    res.status(200).json(menuItems);
  } catch (error) {
    console.error('Error retrieving menu items:', error);
    res.status(500).json({ message: 'Failed to retrieve menu items', error: error.message });
  }
};

// Update an existing menu item
const updateMenuItem = async (req, res) => {
  const { id } = req.params;
  const { dishName, price, foodType, caption, description } = req.body;
  const image = req.file ? `uploads/${req.file.filename}` : null;

  // Check if ID is valid
  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid menu item ID' });
  }

  try {
    const menuItem = await Menu.findById(id);

    if (!menuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }

    // Update the menu item with new values
    menuItem.dishName = dishName;
    menuItem.price = price;
    menuItem.foodType = foodType;
    menuItem.caption = caption;
    menuItem.description = description;
    if (image) {
      // Optionally, delete the old image
      if (menuItem.image) {
        const oldImagePath = path.join(__dirname, '..', menuItem.image);
        fs.unlink(oldImagePath, (err) => {
          if (err) console.error('Failed to delete old image:', err);
        });
      }
      menuItem.image = image;
    }

    await menuItem.save();

    res.status(200).json({ menuItem });
  } catch (error) {
    console.error('Error updating menu item:', error);
    res.status(500).json({ message: 'Failed to update menu item', error: error.message });
  }
};

// Delete a menu item
const deleteMenuItem = async (req, res) => {
    try {
      const menuItemId = req.params.id;
  
      // Validate ID format
      if (!mongoose.Types.ObjectId.isValid(menuItemId)) {
        return res.status(400).json({ message: 'Invalid menu item ID format' });
      }
  
      // Find and delete the menu item
      const menuItem = await Menu.findByIdAndDelete(menuItemId);
  
      if (!menuItem) {
        return res.status(404).json({ message: 'Menu item not found' });
      }
  
      // Check if imageFilename exists before attempting to delete the image file
      if (menuItem.imageFilename) {
        const filePath = path.join(__dirname, '..', 'uploads', menuItem.imageFilename);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
          console.log('Image file deleted:', filePath);
        } else {
          console.log('Image file not found:', filePath);
        }
      } else {
        console.log('No imageFilename provided for this menu item.');
      }
  
      res.status(200).json({ message: 'Menu item and image deleted successfully' });
    } catch (error) {
      console.error('Error deleting menu item:', error);
      res.status(500).json({ message: 'Failed to delete menu item', error });
    }
  };
  
module.exports = { addMenuItem, getMenuItems, updateMenuItem, deleteMenuItem };
