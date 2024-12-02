
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './RestaurantMenu.css';
import axios from 'axios';

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export default function Starters() {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 });
  const [dishes, setDishes] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [user, setUser] = useState(null); // State for user

  // Fetch menu data
  useEffect(() => {
    axios.get('http://localhost:8000/api/menu/view')
      .then((response) => {
        console.log(response.data); // Log the response data
        const starters = response.data.filter(dish => dish.foodType === 'starter');
        setDishes(starters);
      })
      .catch((error) => {
        console.error('Error fetching menu items:', error);
        alert('Error fetching menu items');
      });
  }, []);

  // Set user from sessionStorage
  useEffect(() => {
    const storedEmail = sessionStorage.getItem('userEmail'); // Retrieve user email from sessionStorage
    if (storedEmail) {
      setUser({ email: storedEmail }); // Set user state with email
    }
  }, []);

  // Handle order placement
 // Starters.js

const handleOrder = async (dish) => {
  if (!user || !user.email) {  // Ensure user is logged in and has an email
    alert('You must be logged in to place an order');
    return;
  }

  try {
    // Ensure the correct endpoint is being hit
    const response = await axios.post('http://localhost:8000/api/order/create', {
      dishName: dish.dishName,
      price: dish.price,
      userEmail: user.email,
    });
    alert('Order placed successfully');
  } catch (error) {
    console.error('Error placing order:', error);
    alert('Failed to place order');
  }
};

  

  const visibleDishes = showAll ? dishes : dishes.slice(0, 6);

  return (
    <div className="container menu-category" ref={ref}>
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <h2 className="category-title text-center">Starters</h2>
        <div className="row">
          {visibleDishes.map((dish) => (
            <motion.div
              key={dish._id}
              className="col-lg-4 col-md-6 col-sm-12 mb-4"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="card menu-item" onClick={() => setSelectedId(dish._id)}>
                <img className="card-header-img" src={`http://localhost:8000/${dish.image}`} alt={dish.dishName} />
                <div className="card-body">
                  <h5 className="card-title">{dish.dishName}</h5>
                  <p className="card-text text-dark">{dish.caption}</p>
                  <p className="price">${dish.price.toFixed(2)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {dishes.length > 6 && (
          <div className="row">
            <div className="text-center mt-4">
              <button
                className="btn btn-primary"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? 'View Less' : 'View More'}
              </button>
            </div>
          </div>
        )}
      </motion.div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="overlay"
            layoutId={selectedId}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1000,
            }}
          >
            <div
              style={{
                background: 'white',
                padding: '20px',
                borderRadius: '10px',
                textAlign: 'center',
              }}
            >
              <motion.h5 style={{ color: 'black' }}>
                {dishes.find((dish) => dish._id === selectedId).dishName}
              </motion.h5>
              <motion.p style={{ color: 'black' }}>
                ${dishes.find((dish) => dish._id === selectedId).price.toFixed(2)}
              </motion.p>
              <motion.img
                src={`http://localhost:8000/${dishes.find((dish) => dish._id === selectedId).image}`}
                alt={dishes.find((dish) => dish._id === selectedId).dishName}
                style={{ width: '300px', height: '300px' }}
              />
              <motion.p style={{ color: 'black' }}>
                {dishes.find((dish) => dish._id === selectedId).description}
              </motion.p>
              <motion.button
                onClick={() => handleOrder(dishes.find((dish) => dish._id === selectedId))}
                className="btn btn-danger"
                style={{ marginTop: '10px', marginRight: '10px' }}
              >
                Order Now
              </motion.button>
              <motion.button
                onClick={() => setSelectedId(null)}
                className="btn btn-secondary"
                style={{ marginTop: '10px' }}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
