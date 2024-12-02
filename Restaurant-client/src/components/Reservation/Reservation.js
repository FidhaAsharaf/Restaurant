
// import React, { useState, useEffect } from 'react';
// import './Reservation.css'; // Import the updated CSS
// import AOS from 'aos'; // Import AOS
// import 'aos/dist/aos.css'; // Import AOS styles

// export default function Reservation() {
//   const [numPeople, setNumPeople] = useState(1);
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');

//   // Define the API URL directly
//   const apiUrl = 'http://localhost:8000/api/reservation'; // Adjust as needed for production

//   const handleReservation = async () => {
//     if (numPeople && date && time) { 
//       try {
//         const response = await fetch(`${apiUrl}/create`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ numPeople, date, time }),
//         });

//         const data = await response.json();
//         if (response.ok) {
//           alert(`Reservation confirmed for ${numPeople} people on ${date} at ${time}`);
//         } else {
//           alert('Error: ' + data.message);
//         }
//       } catch (error) {
//         alert('Error: ' + error.message);
//       }
//     } else {
//       alert('Please fill all the fields.');
//     }
//   };

//   useEffect(() => {
//     AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
//   }, []);

//   return (
//     <div className="container-fluid reservation-section">
//       {/* Content for booking heading and description */}
//       <div className="reservation-content text-center" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
//         <h1>Book Your Table Now</h1>
//         <p>
//           <b><i>Enjoy an unforgettable dining experience at our restaurant. Whether it’s a special occasion or just a casual meal, we’ve got you covered. Book a table with us today and savor the flavors.</i></b>
//         </p>
//       </div>

//       {/* Reservation form below content */}
//       <div className="reservation-form" data-aos="fade-down" data-aos-anchor-placement="bottom-bottom">
//         <div className="form-row">
//           <div className="form-group">
//             <label htmlFor="numPeople">Number of People</label>
//             <select
//               id="numPeople"
//               value={numPeople}
//               onChange={(e) => setNumPeople(e.target.value)}
//             >
//               {[...Array(10).keys()].map((i) => (
//                 <option key={i + 1} value={i + 1}>
//                   {i + 1}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="form-group">
//             <label htmlFor="date">Date</label>
//             <input
//               type="date"
//               id="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="time">Time</label>
//             <input
//               type="time"
//               id="time"
//               value={time}
//               onChange={(e) => setTime(e.target.value)}
//             />
//           </div>
//         </div>

//         <button onClick={handleReservation} className="reserve-button">
//           Reserve Now
//         </button>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import './Reservation.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Reservation() {
  const [numPeople, setNumPeople] = useState(1);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // Define the API URL directly
  const apiUrl = 'http://localhost:8000/api/reserve';

  const handleReservation = async () => {
    const email = sessionStorage.getItem('userEmail'); // Retrieve user email

    if (!email) {
      alert('Please log in to make a reservation.');
      return;
    }

    if (numPeople && date && time) {
      try {
        const response = await fetch(`${apiUrl}/create`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ numPeople, date, time, email }), // Include email in request
        });

        const data = await response.json();
        if (response.ok) {
          alert(`Reservation confirmed for ${numPeople} people on ${date} at ${time}`);
        } else {
          alert('Error: ' + data.message);
        }
      } catch (error) {
        alert('Error: ' + error.message);
      }
    } else {
      alert('Please fill all the fields.');
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container-fluid reservation-section">
      <div className="reservation-content text-center" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <h1>Book Your Table Now</h1>
        <p>
          <b><i>Enjoy an unforgettable dining experience at our restaurant. Whether it’s a special occasion or just a casual meal, we’ve got you covered. Book a table with us today and savor the flavors.</i></b>
        </p>
      </div>

      <div className="reservation-form" data-aos="fade-down" data-aos-anchor-placement="bottom-bottom">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="numPeople">Number of People</label>
            <select
              id="numPeople"
              value={numPeople}
              onChange={(e) => setNumPeople(e.target.value)}
            >
              {[...Array(10).keys()].map((i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
        </div>

        <button onClick={handleReservation} className="reserve-button">
          Reserve Now
        </button>
      </div>
    </div>
  );
}
