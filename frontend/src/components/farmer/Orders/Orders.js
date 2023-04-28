import React, { useEffect, useState } from 'react'
import OrdersItem from './OrdersItem'
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

    const orderItems = orders.map((order)=><OrdersItem key={order.id} orders={order} />)



  return (
    <>
    <FarmerNav/>
    <div className='container p-2'>
    {status && 
      <div className="row">
        
        <div className="col-12 py-5 text-center">
          <h2 className="text-center">loading ...</h2>
          <Skeleton height={40} width={560} />
        </div>
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
        {orderItems}
    </div>
    </>
  )
}

export default Orders