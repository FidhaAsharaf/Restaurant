import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const userEmail = sessionStorage.getItem('userEmail');
      if (!userEmail) return; // Ensure user is logged in

      const response = await fetch(`http://localhost:8000/api/order?email=${userEmail}`);
      if (!response.ok) {
        console.error('Failed to fetch orders:', response.statusText);
        return;
      }

      const data = await response.json();
      setOrders(data);
    };

    fetchOrders();
  }, []);

  const cancelOrder = async (orderId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/order/${orderId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setOrders(orders.filter(order => order._id !== orderId));
        alert('Order canceled successfully');
      } else {
        console.error('Failed to cancel order:', response.statusText);
      }
    } catch (error) {
      console.error('Failed to cancel order', error);
    }
  };

  return (
    <div className="container-fluid">
      <Navbar />

      {/* Image with overlay content */}
      <div className="position-relative">
        <img 
          src="images/new22.jpg" 
          alt="Order Header"
          className="img-fluid"
          style={{ width: '100%', height: '770px', objectFit: 'cover' }}
        />
        
        {/* Overlay content */}
        <div 
          className="position-absolute top-50 start-50 translate-middle text-center w-100"
          style={{ zIndex: 1 }}
        >
          <h2 className="text-white mb-4" style={{ fontSize: '3rem', fontWeight: 'bold', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)' }}>
            My Orders
          </h2>

          {orders.length > 0 ? (
            <div className="container">
              <div className="table-responsive">
                <table className="table table-bordered text-white bg-black" style={{ opacity: 0.9 }}>
                  <thead>
                    <tr>
                      <th className='text-white'>Order ID</th>
                      <th className='text-white'>Items</th>
                      <th className='text-white'>Price (Rs)</th>
                      <th className='text-white'>Status</th>
                      <th className='text-white'>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map(order => (
                      <tr key={order._id} >
                        <td className='text-white'>{order._id}</td>
                        <td className='text-white'>{order.dishName}</td>
                        <td className='text-white'>{order.price}</td>
                        <td className='text-white'>{order.action}</td>
                        <td>
                          <button 
                            className="btn btn-danger" 
                            onClick={() => cancelOrder(order._id)}
                          >
                            Cancel Order
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <p className="text-white">No orders found.</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyOrders;
