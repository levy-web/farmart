import React, { useEffect, useState } from 'react'
import OrdersItem from './OrdersItem'
import {useDispatch, useSelector} from 'react-redux'
import { fetchOrders } from '../../redux/order/OrderAction'

function Orders() {
    // const [orders , setOrders] = useState([])

    const status = useSelector((state) => state.orders.status);
    const orders = useSelector((state) => state.orders.orders);
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(fetchOrders())

    }, [])
    console.log(orders)

    const orderItems = orders.map((order)=><OrdersItem key={order.id} orders={order} />)



  return (
    <div className='container p-2'>
      {status && <div> <h2>loading ...</h2></div>}
        {orderItems}
    </div>
  )
}

export default Orders