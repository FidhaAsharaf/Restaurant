// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const MyReservations = () => {
//   const [reservations, setReservations] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchReservations = async () => {
//       const userEmail = sessionStorage.getItem('userEmail');
//       if (!userEmail) {
//         alert('Please log in to view your reservations');
//         navigate('/login');
//         return;
//       }

//       const response = await fetch(`http://localhost:8000/api/reserve?email=${userEmail}`);
//       if (!response.ok) {
//         console.error('Failed to fetch reservations:', response.statusText);
//         return;
//       }

//       const data = await response.json();
//       setReservations(data);
//     };

//     fetchReservations();
//   }, [navigate]);

//   const cancelReservation = async (reservationId) => {
//     try {
//       const response = await fetch(`http://localhost:8000/api/reserve/${reservationId}`, {
//         method: 'DELETE',
//       });
//       if (response.ok) {
//         setReservations(reservations.filter(reservation => reservation._id !== reservationId));
//         alert('Reservation canceled successfully');
//       } else {
//         console.error('Failed to cancel reservation', response.statusText);
//         alert('Failed to cancel reservation');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred while canceling the reservation');
//     }
//   };

//   return (
//     <div className="container my-4">
//       <h2>My Reservations</h2>
//       <button className="btn btn-primary mb-3" onClick={() => navigate('/')}>Back to Home</button>
      
//       {reservations.length > 0 ? (
//         <table className="table table-striped table-bordered">
//           <thead>
//             <tr>
//               <th>Reservation ID</th>
//               <th>Date</th>
//               <th>Time</th>
//               <th>Number of People</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reservations.map(reservation => (
//               <tr key={reservation._id}>
//                 <td>{reservation._id}</td>
//                 <td>{new Date(reservation.date).toLocaleDateString()}</td>
//                 <td>{reservation.time}</td>
//                 <td>{reservation.numPeople}</td> {/* Use 'numPeople' here */}
//                 <td>{reservation.status}</td>
//                 <td>
//                   <button className="btn btn-danger" onClick={() => cancelReservation(reservation._id)}>
//                     Cancel Reservation
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No reservations found.</p>
//       )}
//     </div>
//   );
// };

// export default MyReservations;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const MyReservations = () => {
  const [reservations, setReservations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReservations = async () => {
      const userEmail = sessionStorage.getItem('userEmail');
      if (!userEmail) {
        alert('Please log in to view your reservations');
        navigate('/login');
        return;
      }

      const response = await fetch(`http://localhost:8000/api/reserve?email=${userEmail}`);
      if (!response.ok) {
        console.error('Failed to fetch reservations:', response.statusText);
        return;
      }

      const data = await response.json();
      setReservations(data);
    };

    fetchReservations();
  }, [navigate]);

  const cancelReservation = async (reservationId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/reserve/${reservationId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setReservations(reservations.filter(reservation => reservation._id !== reservationId));
        alert('Reservation canceled successfully');
      } else {
        console.error('Failed to cancel reservation', response.statusText);
        alert('Failed to cancel reservation');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while canceling the reservation');
    }
  };

  return (
    <div className="container-fluid">
      <Navbar/>
      {/* Image with overlay content */}
      <div className="position-relative">
        <img 
          src="images/new26.jpg" 
          alt="Reservation Header"
          className="img-fluid"
          style={{ width: '100%', height: '770px', objectFit: 'cover' }}
        />
        
        {/* Overlay content */}
        <div 
          className="position-absolute top-50 start-50 translate-middle text-center w-100"
          style={{ zIndex: 1 }}
        >
          <h2 className="text-white mb-4" style={{ fontSize: '3rem', fontWeight: 'bold', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)' }}>
            My Reservations
          </h2>

          {reservations.length > 0 ? (
            <div className="container table-responsive">
              <table className="table table-bordered text-white bg-black" style={{ opacity: 0.9 }}>
                <thead>
                  <tr>
                    <th className='text-white'>Reservation ID</th>
                    <th className='text-white'>Date</th>
                    <th className='text-white'>Time</th>
                    <th className='text-white'>Number of People</th>
                    <th className='text-white'>Status</th>
                    <th >Action</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map(reservation => (
                    <tr key={reservation._id}>
                      <td className='text-white'>{reservation._id}</td>
                      <td className='text-white'>{new Date(reservation.date).toLocaleDateString()}</td>
                      <td className='text-white'>{reservation.time}</td>
                      <td className='text-white'>{reservation.numPeople}</td>
                      <td className='text-white'>{reservation.status}</td>
                      <td>
                        <button 
                          className="btn btn-danger" 
                          onClick={() => cancelReservation(reservation._id)}
                        >
                          Cancel Reservation
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-white">No reservations found.</p>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default MyReservations;
