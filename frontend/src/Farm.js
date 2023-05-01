import Orders from './components/farmer/Orders/Orders';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import FarmerNav from './components/farmer/FarmerNav';
import { logoutFarmer } from './components/redux/farmer/FarmerAction';


function Farm() {
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch()

  const token = useSelector((state)=>state.farmer.token)
  console.log(token)

  console.log(orders)

  const EmptTransactions = () => {
    return (
      <div className="container mt-2">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">You don't have recent transactions</h4>
            <Link to="/farm/orders" className="btn  btn-outline-dark mx-4">
              <i className="fa fa-arrow-right"></i> Check orders
            </Link>
          </div>
        </div>
      </div>
    );
  };


  const ShowTransactions = () => {
    return (
    <div className='container p-4'>
    <div className='row'>
      
        <div className='card col-lg-12 col-sm-12'>
            <h2>Transactions</h2>
            <table className="mt-2 ">
              <thead>
                <tr className='bg-dark'>
                  <th className='text-white'>Customer</th>
                  <th className='text-white'>Animal Name</th>
                  <th className='text-white'>Total</th>
                </tr>
              </thead>
              <tbody>
              {showOrders}
              </tbody>
            </table>


        <div className='col-lg-12 col-sm-12'>
          
          <div className='card-body '>
            <h2>Revenue</h2>
            <p>Total revenue: ksh {orders.reduce((acc, order) => acc + order.total_price, 0)}</p>
            <Link to='/farm/orders' ><button className='btn bg-white text-primary' variant="primary">new orders</button></Link>
          
        </div>
      </div>
        
      
      </div>

    </div>
  </div>

    )
  }


  useEffect(()=>{
    fetch('https://farmart-api.onrender.com/transactions',{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then((r)=>r.json())
    .then((data)=>{
      if (data.status === "ok"){
        setOrders(data.data.transactions)
      }else if(data.data.status === "unauthorized"){
        console.log(data)
        dispatch(logoutFarmer())
      }else if (data.data.info === "Signature has expired"){
        console.log(data)
        dispatch(logoutFarmer())
      }      
    })
  },[])

  const showOrders = orders.map((order) => (
    <tr key={order.id}>
      <td>{order.customer_name}</td>
      <td>{order.animal_name}</td>
      <td>{order.total_price}</td>                    
    </tr>
  ))






  return (
    <>
      <FarmerNav/>
      {orders.length > 0 ? <ShowTransactions /> : <EmptTransactions />}    
    </>
  );
}

export default Farm;
