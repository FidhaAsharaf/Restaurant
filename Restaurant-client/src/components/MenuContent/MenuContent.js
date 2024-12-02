import React from 'react';
import AOS from 'aos'; // AOS Library
import 'aos/dist/aos.css'; // AOS CSS
import './MenuContent.css'; // Import the custom styles

export default function MenuContent() {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className="container-fluid menu-content">
      {/* First section: Text on the left, image on the right */}
      <div className="container d-flex justify-content-center align-items-center flex-column mb-5">
  <div className="row align-items-center">
    <div className="col-md-6 col-sm-12 text-content text-center" data-aos="fade-right">
      <h2 className="menu-title">Explore Our Delicious Menu</h2>
      <p className="menu-description">
        Indulge in a wide variety of dishes made from the freshest ingredients. Our menu includes a selection of
        appetizers, main courses, and desserts that cater to all taste buds. Whether you're a fan of traditional
        favorites or looking to try something new, we have something for everyone. Indulge in a wide variety of dishes made from the freshest ingredients. Our menu includes a selection of
        appetizers, main courses, and desserts that cater to all taste buds. Whether you're a fan of traditional
        favorites or looking to try something new, we have something for everyone. Indulge in a wide variety of dishes made from the freshest ingredients. Our menu includes a selection of
        appetizers, main courses, and desserts that cater to all taste buds. Whether you're a fan of traditional
        favorites or looking to try something new, we have something for everyone.
      </p>
    </div>
    <div className="col-md-6 col-sm-12 text-center" data-aos="fade-left">
      <img src="images/new24.jpg" alt="Menu" className="img-fluid menu-image" />
    </div>
  </div>
</div>

{/* Second section: Image on the left, text on the right */}
<div className="container d-flex justify-content-center align-items-center flex-column">
  <div className="row align-items-center">
    <div className="col-md-6 col-sm-12 text-center" data-aos="fade-right">
      <img src="images/new25.jpg" alt="Special Dish" className="img-fluid special-dish-image" />
    </div>
    <div className="col-md-6 col-sm-12 text-content text-center" data-aos="fade-left">
      <h2 className="menu-title">Chef's Special Dishes</h2>
      <p className="menu-description">
        Our chef's special dishes are a blend of culinary artistry and flavors that will leave you craving for more.
        Each dish is crafted with the finest ingredients, ensuring a delightful dining experience. Indulge in a wide variety of dishes made from the freshest ingredients. Our menu includes a selection of
        appetizers, main courses, and desserts that cater to all taste buds. Whether you're a fan of traditional
        favorites or looking to try something new, we have something for everyone. Indulge in a wide variety of dishes made from the freshest ingredients. Our menu includes a selection of
        appetizers, main courses, and desserts that cater to all taste buds. Whether you're a fan of traditional
        favorites or looking to try something new, we have something for everyone. Indulge in a wide variety of dishes made from the freshest ingredients. Our menu includes a selection of
        appetizers, main courses, and desserts that cater to all taste buds. Whether you're a fan of traditional
        favorites or looking to try something new, we have something for everyone.
      </p>
    </div>
  </div>
</div>

    </div>
  );
}
