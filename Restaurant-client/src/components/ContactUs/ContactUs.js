// // ContactUs.js (Frontend)
// import React, { useEffect, useState } from 'react';
// import './ContactUs.css'; // Ensure you have styles defined
// import { motion } from 'framer-motion';
// import AOS from 'aos';  // Import AOS
// import 'aos/dist/aos.css';  // Import AOS styles
// import axios from 'axios';  // Import axios

// export default function ContactUs() {
//   useEffect(() => {
//     AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
//   }, []);

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const [statusMessage, setStatusMessage] = useState('');

//   // Handle form input changes
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     console.log('Form Submitted with data:', formData);  // Log the form data before submitting

//     try {
//       const response = await axios.post('http://localhost:8000/api/contact', formData);
//       console.log('Response:', response.data);  // Log the response from backend
//       setStatusMessage(response.data.message);
//       setFormData({ name: '', email: '', message: '' });  // Clear the form on success
//     } catch (error) {
//       console.error('Error during form submission:', error);  // Log error for debugging
//       setStatusMessage('Error: Unable to submit the form. Please try again.');
//     }
//   };

//   return (
//     <div className="container-fluid contact-us py-5">
//       <div className="container">
//         <div className="row">
//           {/* Left side: Contact Details */}
//           <div className="col-md-6 mb-4 contact-info" data-aos="fade-right">
//             <h3 className='text-white'>Contact Information</h3>
//             <ul className="list-unstyled">
//               <li><strong>Address:</strong> 123 Restaurant St, Melbourne</li>
//               <li><strong>Phone:</strong> +123 456 7890</li>
//               <li><strong>Email:</strong> info@restaurant.com</li>
//               <li><strong>Working Hours:</strong> Mon-Sun, 9 AM - 10 PM</li>
//             </ul>
//           </div>

//           {/* Right side: Contact Form */}
//           <div className="col-md-6" data-aos="fade-up">
//             <div className="form-container">
//               <h3 className='text-white'>Get in Touch</h3>
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group mb-3">
//                   <label htmlFor="name">Name:</label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     className="form-control"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="form-group mb-3">
//                   <label htmlFor="email">Email:</label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     className="form-control"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="form-group mb-3">
//                   <label htmlFor="message">Message:</label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     className="form-control"
//                     rows="4"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                   ></textarea>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//               </form>
//               {statusMessage && (
//                 <div className="mt-3 alert alert-info">{statusMessage}</div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Map Section */}
//       <div className="map">
//         <h3>Find Us Here:</h3>
//         <iframe
//           title="Google Maps Location"
//           src="https://www.google.com/maps/embed?pb=..."  // Make sure to update this with the correct map URL
//           width="100%"
//           height="300"
//           style={{ border: 0 }}
//           allowFullScreen
//           loading="lazy"
//         ></iframe>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import './ContactUs.css'; // Ensure you have styles defined
import { motion } from 'framer-motion';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS styles
import axios from 'axios';  // Import axios

export default function ContactUs() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log('Form Submitted with data:', formData);  // Log the form data before submitting

    try {
      const response = await axios.post('http://localhost:8000/api/contact', formData);
      console.log('Response:', response.data);  // Log the response from backend
      setStatusMessage(response.data.message);
      setFormData({ name: '', email: '', message: '' });  // Clear the form on success
    } catch (error) {
      console.error('Error during form submission:', error);  // Log error for debugging
      setStatusMessage('Error: Unable to submit the form. Please try again.');
    }
  };

  return (
    <div className="container-fluid contact-us py-5">
      <div className="container">
        <div className="row">
          {/* Left side: Contact Details */}
          <div className="col-md-6 mb-4 contact-info" data-aos="fade-right">
            <h3 className='text-white'>Contact Information</h3>
            <ul className="list-unstyled">
              <li><strong>Address:</strong> 123 Restaurant St, Melbourne</li>
              <li><strong>Phone:</strong> +123 456 7890</li>
              <li><strong>Email:</strong> info@restaurant.com</li>
              <li><strong>Working Hours:</strong> Mon-Sun, 9 AM - 10 PM</li>
            </ul>
          </div>

          {/* Right side: Contact Form */}
          <div className="col-md-6" data-aos="fade-up">
            <div className="form-container">
              <h3 className='text-white'>Get in Touch</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
              {statusMessage && (
                <div className="mt-3 alert alert-info">{statusMessage}</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map">
        <h3>Find Us Here:</h3>
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=..."  // Make sure to update this with the correct map URL
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
