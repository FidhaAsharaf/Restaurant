import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './RestaurantMenu.css';

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

const drinks = [
  {
    id: 1,
    title: 'Margarita',
    subtitle: 'Classic cocktail made with tequila, lime juice, and triple sec.',
    price: '$10.00',
    description:
      'A refreshing blend of tequila, fresh lime juice, and triple sec served on the rocks or blended. A true classic for any cocktail lover.',
    imageUrl: '/images/margarita.jpg', // Update the image path accordingly
  },
  {
    id: 2,
    title: 'Mojito',
    subtitle: 'Refreshing drink with mint, lime, rum, and soda a touch of sweetness',
    price: '$9.00',
    description:
      'A classic Cuban cocktail that combines fresh mint, lime juice, rum, and soda water. Perfect for cooling down on a hot day.',
    imageUrl: '/images/Mojito.jpeg', // Update the image path accordingly
  },
  {
    id: 3,
    title: 'Iced Lemon Tea',
    subtitle: 'Chilled black tea with lemon and a touch of sweetness.',
    price: '$4.00',
    description:
      'A refreshing iced tea brewed from black tea and infused with fresh lemon juice, perfect for any occasion.',
    imageUrl: '/images/ice-lemon-tea.jpeg', // Update the image path accordingly
  },
  {
    id: 4,
    title: 'Mojito',
    subtitle: 'Refreshing cocktail made with mint, lime, sugar, and rum.',
    price: '$8.00',
    description:
      'A minty refreshing cocktail made with muddled mint, fresh lime juice, sugar, and white rum, topped with soda water.',
    imageUrl: '/images/Mojito.jpeg', // Update the image path accordingly
  },
  {
    id: 5,
    title: 'Ginger Ale',
    subtitle: 'Sparkling drink with a zesty ginger flavor, perfect for any occasion.',
    price: '$3.50',
    description:
      'A fizzy drink with a crisp and refreshing ginger flavor, perfect as a mixer or on its own.',
    imageUrl: '/images/ginger-ale.jpg', // Update the image path accordingly
  },
  {
    id: 6,
    title: 'Pina Colada',
    subtitle: 'Tropical cocktail made with rum, coconut cream, and pineapple juice.',
    price: '$9.00',
    description:
      'A delicious tropical drink made with rum, coconut cream, and fresh pineapple juice, blended to perfection.',
    imageUrl: '/images/pina-colada.jpg', // Update the image path accordingly
  },
];

export default function Starters() {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 });
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="container menu-category" ref={ref}>
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <h2 className="category-title text-center">Drinks</h2>
        <div className="row">
          {drinks.map((drink) => (
            <motion.div
              key={drink.id}
              className="col-lg-4 col-md-6 col-sm-12 mb-4"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="card menu-item" onClick={() => setSelectedId(drink.id)}>
                <img className="card-header-img" src={drink.imageUrl} alt={drink.title} />
                <div className="card-body">
                  <h5 className="card-title">{drink.title}</h5>
                  <p className="card-text">{drink.subtitle}</p>
                  <p className="price">{drink.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="row">
          <div className="text-center mt-4">
            <button className="btn btn-primary">View More</button>
          </div>
        </div>
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
                {drinks.find((drink) => drink.id === selectedId).title}
              </motion.h5>
              <motion.p style={{ color: 'black' }}>
                {drinks.find((drink) => drink.id === selectedId).price}
              </motion.p>
              <motion.img
                src={drinks.find((drink) => drink.id === selectedId).imageUrl}
                alt={drinks.find((drink) => drink.id === selectedId).title}
                style={{ width: '300px', height: '300px' }}
              />
              <motion.p style={{ color: 'black' }}>
                {drinks.find((drink) => drink.id === selectedId).description}
              </motion.p>
              <motion.button
                onClick={() => setSelectedId(null)}
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
