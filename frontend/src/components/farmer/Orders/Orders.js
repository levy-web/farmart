import React, { useEffect, useState } from 'react'
import OrdersItem from './OrdersItem'
import { Link } from 'react-router-dom';
import Skeleton from "react-loading-skeleton";
import {useDispatch, useSelector} from 'react-redux'
import { fetchOrders } from '../../redux/order/OrderAction'
import FarmerNav from '../FarmerNav';

function Orders() {
    // const [orders , setOrders] = useState([])

    const status = useSelector((state) => state.orders.status);
    const orders = useSelector((state) => state.orders.orders);
    const token = useSelector((state)=>state.farmer.token)
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(fetchOrders(token))

    }, [])
    console.log(orders)
    const EmptyOrders = () => {
      return (
        <div className="container mt-2">
          <div className="row">
            <div className="col-md-12 py-5 bg-light text-center">
              <h4 className="p-3 display-5">You have {orders.length} Orders</h4>
            </div>
          </div>
        </div>
      );
    };

    const orderItems = orders.map((order)=><OrdersItem key={order.id} orders={order} />)

    const ShowOrders = () => {
      return(
        <div className='container p-2'>
        {orderItems}
        </div>
      )
    }



  return (
    <>
    <FarmerNav/>
    <div className='container p-2'>
    {status && 
      <div className="row">
        
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton  height={200}/>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={200} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={200} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={200} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={200} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={200} />
        </div>
      </div>
      }
        
    </div>
    {orders.length > 0 ? <ShowOrders /> : <EmptyOrders />}
    </>
  )
}

export default Orders