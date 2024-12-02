import React, { useEffect, useState } from 'react';

const ViewReservation = () => {
  const [reservations, setReservations] = useState([]);

  const fetchReservations = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/reserve/all');
      const data = await response.json();
      setReservations(data);
    } catch (error) {
      console.error('Error fetching reservations:', error);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  const handleUpdateStatus = async (reservationId, status) => {
    try {
      const response = await fetch('http://localhost:8000/api/reserve/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reservationId, status }),
      });

      if (response.ok) {
        alert(`Reservation ${status}`);
        fetchReservations(); // Refresh list after update
      } else {
        console.error('Failed to update reservation status');
      }
    } catch (error) {
      console.error('Error updating reservation status:', error);
    }
  };

  const handleDeleteReservation = async (reservationId) => {
    if (!window.confirm('Are you sure you want to delete this reservation?')) return;

    try {
      const response = await fetch(`http://localhost:8000/api/reserve/${reservationId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Reservation deleted successfully');
        fetchReservations(); // Refresh list after deletion
      } else {
        console.error('Failed to delete reservation');
      }
    } catch (error) {
      console.error('Error deleting reservation:', error);
    }
  };

  return (
    <div>
      <h2>Reservations</h2>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Email</th>
            <th>Number of People</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reservations.length > 0 ? (
            reservations.map((reservation) => (
              <tr key={reservation._id}>
                <td>{reservation.email}</td>
                <td>{reservation.numPeople}</td>
                <td>{reservation.date}</td>
                <td>{reservation.time}</td>
                <td>{reservation.status}</td>
                <td>
                  <button onClick={() => handleUpdateStatus(reservation._id, 'approved')}>Approve</button>
                  <button onClick={() => handleUpdateStatus(reservation._id, 'rejected')}>Reject</button>
                  {/* <button onClick={() => handleDeleteReservation(reservation._id)}>Delete</button> */}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No reservations available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewReservation;
