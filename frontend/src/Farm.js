import Orders from './components/farmer/Orders/Orders';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FarmerNav from './components/farmer/FarmerNav';


function Farm() {
  const [orders, setOrders] = useState([]);
  console.log(orders)

  useEffect(()=>{
    fetch('https://farmart-api.onrender.com/transactions',{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        "Authorization": `Bearer ${localStorage.getItem("TOKEN")}`
      }
    })
    .then((r)=>r.json())
    .then((data)=>setOrders(data))
  },[])

  return (
    <>
    <FarmerNav/>
    <div className='container'>
    <div className='row'>
      <div className='col'>
        <div className='card'>
          <div className='card-body'>
            <h2>Transactions</h2>
            <table className="table mt-2">
              <thead>
                <tr className='bg-dark'>
                  <th className='text-white'>Id</th>
                  <th className='text-white'>Customer</th>
                  <th className='text-white'>Animal Name</th>
                  <th className='text-white'>Total</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer_name}</td>
                    <td>{order.animal_name}</td>
                    <td>{order.total_price}</td>                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <div className='card'>
          <div className='card-body '>
            <h2>Revenue</h2>
            <p>Total revenue: ksh {orders.reduce((acc, order) => acc + order.total_price, 0)}</p>
            <Link to='/farm/orders' ><button className='btn bg-white text-primary' variant="primary">new orders</button></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  );
}

export default Farm;
