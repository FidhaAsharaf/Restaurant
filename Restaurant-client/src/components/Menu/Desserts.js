import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './RestaurantMenu.css'; // Import the CSS file

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

// Dessert items array
const desserts = [
  {
    id: 1,
    title: 'Choco Lava Cake',
    subtitle: 'Molten chocolate cake with a warm, gooey center.',
    price: '$7.50',
    description: 'A rich chocolate cake with a molten center, perfect for chocolate lovers.',
    imageUrl: '/images/chocolava-cake.jpg',
  },
  {
    id: 2,
    title: 'Cheesecake',
    subtitle: 'Classic New York-style cheesecake with a graham cracker crust.',
    price: '$6.50',
    description: 'A smooth and creamy cheesecake with a buttery graham cracker crust.',
    imageUrl: '/images/cheese-cake.jpeg',
  },
  {
    id: 3,
    title: 'Apple Pie',
    subtitle: 'Warm apple pie served with vanilla ice cream.',
    price: '$5.00',
    description: 'A classic dessert made with spiced apples, baked in a flaky crust.',
    imageUrl: '/images/apple-pie.jpg',
  },
  {
    id: 4,
    title: 'Tiramisu',
    subtitle: 'Classic Italian dessert made with coffee-soaked ladyfingers and mascarpone.',
    price: '$7.50',
    description: 'A delicious coffee-flavored dessert that’s perfect for any occasion.',
    imageUrl: '/images/tiramisu.jpg',
  },
  {
    id: 5,
    title: 'Panna Cotta',
    subtitle: 'Creamy dessert made with sweetened cream thickened with gelatin.',
    price: '$6.00',
    description: 'A smooth and creamy dessert that melts in your mouth, topped with a berry sauce.',
    imageUrl: '/images/panna-cotta.jpg',
  },
  {
    id: 6,
    title: 'Fruit Sorbet',
    subtitle: 'Refreshing frozen dessert made from pureed fruit, sugar, and water.',
    price: '$5.00',
    description: 'A light and refreshing dessert made with real fruit for a burst of flavor.',
    imageUrl: '/images/fruit-sorbet.jpg',
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
        <h2 className="category-title text-center">Desserts</h2>
        <div className="row">
          {desserts.map((dessert) => (
            <motion.div
              key={dessert.id}
              className="col-lg-4 col-md-6 col-sm-12 mb-4"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="card menu-item" onClick={() => setSelectedId(dessert.id)}>
                <img className="card-header-img" src={dessert.imageUrl} alt={dessert.title} />
                <div className="card-body">
                  <h5 className="card-title">{dessert.title}</h5>
                  <p className="card-text">{dessert.subtitle}</p>
                  <p className="price">{dessert.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-primary">View More</button>
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
                {desserts.find((dessert) => dessert.id === selectedId).title}
              </motion.h5>
              <motion.p style={{ color: 'black' }}>
                {desserts.find((dessert) => dessert.id === selectedId).price}
              </motion.p>
              <motion.img
                src={desserts.find((dessert) => dessert.id === selectedId).imageUrl}
                alt={desserts.find((dessert) => dessert.id === selectedId).title}
                style={{ width: '300px', height: '300px' }}
              />
              <motion.p style={{ color: 'black' }}>
                {desserts.find((dessert) => dessert.id === selectedId).description}
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
