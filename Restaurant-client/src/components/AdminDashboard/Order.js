import React, { useState, useEffect } from 'react';
import './UpdateMenu.css';

const Order = () => {
  const [orders, setOrders] = useState([]);

  // Fetch orders from the backend
  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/order'); // Updated URL
      const data = await response.json();
      setOrders(data);  // Set orders in state
    } catch (error) {
      console.error('Failed to fetch orders:', error);
    }
  };

  // Update order status (approve/reject)
  const handleUpdateStatus = async (orderId, status) => {
    try {
      const response = await fetch('http://localhost:8000/api/order/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId, status }),
      });

      if (response.ok) {
        alert(`Order status updated to ${status}`);
        fetchOrders(); // Refresh the list after status update
      } else {
        const data = await response.json();
        console.error('Error updating order status:', data.message);
        alert(data.message || 'Failed to update order status');
      }
    } catch (error) {
      console.error('Failed to update order status:', error);
    }
  };

  // Delete order
  const handleDeleteOrder = async (orderId) => {
    if (!window.confirm('Are you sure you want to delete this order?')) return;

    try {
      const response = await fetch(`http://localhost:8000/api/order/${orderId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Order deleted successfully');
        fetchOrders(); // Refresh the list after deletion
      } else {
        const data = await response.json();
        console.error('Error deleting order:', data.message);
        alert(data.message || 'Failed to delete order');
      }
    } catch (error) {
      console.error('Failed to delete order:', error);
    }
  };

  // Fetch orders on component mount
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="menu-container">
      <h2>Orders</h2>

      {/* Table displaying orders */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Dish Name</th>
              <th>Price</th>
              <th>User Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr><td colSpan="5">No orders found</td></tr>
            ) : (
              orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.dishName}</td>
                  <td>${order.price.toFixed(2)}</td>
                  <td>{order.userEmail}</td>
                  <td>{order.action}</td>
                  <td>
                    <button onClick={() => handleUpdateStatus(order._id, 'approved')}>Approve</button>
                    <button onClick={() => handleUpdateStatus(order._id, 'rejected')}>Reject</button>
                    {/* <button onClick={() => handleDeleteOrder(order._id)}>Delete</button> */}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
