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

// Updated dishes content
const dishes = [
  {
    id: 1,
    title: 'Grilled Salmon',
    subtitle: 'Fresh salmon fillet grilled and served with lemon butter sauce.',
    price: '$18.00',
    description:
      'A perfectly grilled salmon fillet served with a rich lemon butter sauce. A healthy and flavorful choice for seafood lovers.',
    imageUrl: '/images/grilled-salmon.jpg',
  },
  {
    id: 2,
    title: 'Steak Frites',
    subtitle: 'Tender ribeye steak served with crispy fries. It\'s a must-try item.',
    price: '$22.00',
    description:
      'Juicy ribeye steak cooked to perfection, served with crispy golden fries. A classic dish that’s sure to satisfy your cravings.',
    imageUrl: '/images/steak-frites.jpg',
  },
  {
    id: 3,
    title: 'Chicken Alfredo',
    subtitle: 'Grilled chicken tossed with fettuccine pasta in a creamy Alfredo sauce.',
    price: '$16.00',
    description:
      'Tender grilled chicken combined with fettuccine pasta, smothered in a rich and creamy Alfredo sauce. Comfort food at its finest.',
    imageUrl: '/images/chicken-alfredo.jpg',
  },
  {
    id: 4,
    title: 'Mediterranean Hummus',
    subtitle: 'Creamy hummus served with warm pita bread and fresh veggies.',
    price: '$7.50',
    description:
      'A delightful and creamy hummus served with warm pita bread and a side of fresh veggies. A healthy and tasty appetizer.',
    imageUrl: '/images/hummus.jpg',
  },
  {
    id: 5,
    title: 'Caprese Skewers',
    subtitle: 'Fresh mozzarella, cherry tomatoes, and basil drizzled with balsamic glaze.',
    price: '$9.00',
    description:
      'Skewers of fresh mozzarella, ripe cherry tomatoes, and fragrant basil, drizzled with a tangy balsamic glaze. A refreshing appetizer.',
    imageUrl: '/images/caprese.jpg',
  },
  {
    id: 6,
    title: 'Spicy Shrimp Tacos',
    subtitle: 'Soft tacos filled with spicy shrimp, cabbage, and creamy sauce.',
    price: '$11.00',
    description:
      'Soft corn tortillas filled with spicy shrimp, crunchy cabbage, and a creamy sauce. A perfect blend of flavors in every bite.',
    imageUrl: '/images/tacos.jpg',
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
        <h2 className="category-title text-center">Main Course</h2>
        <div className="row">
          {dishes.map((dish) => (
            <motion.div
              key={dish.id}
              className="col-lg-4 col-md-6 col-sm-12 mb-4"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="card menu-item" onClick={() => setSelectedId(dish.id)}>
                <img className="card-header-img" src={dish.imageUrl} alt={dish.title} />
                <div className="card-body">
                  <h5 className="card-title">{dish.title}</h5>
                  <p className="card-text">{dish.subtitle}</p>
                  <p className="price">{dish.price}</p>
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
                {dishes.find((dish) => dish.id === selectedId).title}
              </motion.h5>
              <motion.p style={{ color: 'black' }}>
                {dishes.find((dish) => dish.id === selectedId).price}
              </motion.p>
              <motion.img
                src={dishes.find((dish) => dish.id === selectedId).imageUrl}
                alt={dishes.find((dish) => dish.id === selectedId).title}
                style={{ width: '300px', height: '300px' }}
              />
              <motion.p style={{ color: 'black' }}>
                {dishes.find((dish) => dish.id === selectedId).description}
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
