import Orders from './components/farmer/Orders/Orders';
import React, { useState } from 'react';
import FarmerNav from './components/farmer/FarmerNav';


function Farm() {
  const [orders, setOrders] = useState([
    { id: 1, customer: 'John Doe', total: 100 },
    { id: 2, customer: 'Jane Smith', total: 200 },
    { id: 3, customer: 'Bob Johnson', total: 50 },
  ]);
  return (
    <>
    <FarmerNav/>
    <div className='container'>
    <div className='row'>
      <div className='col'>
        <div className='card'>
          <div className='card-body'>
            <h2>Orders</h2>
            <table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Customer</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <div className='card'>
          <div className='card-body'>
            <h2>Revenue</h2>
            <p>Total revenue: ${orders.reduce((acc, order) => acc + order.total, 0)}</p>
            <button variant="primary">View Sales</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  );
}

export default Farm;
