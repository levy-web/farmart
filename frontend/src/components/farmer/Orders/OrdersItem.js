import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { rejectAnimal } from '../../redux/order/OrderAction';


function OrdersItem({orders}) {

  const order = useSelector((state) => state.orders.orders);
  const token = useSelector((state)=>state.farmer.token)
  const dispatch = useDispatch()

  function acceptOrder(name, customer, price, quantity, id){
    console.log(price * quantity)
    console.log(name)
    console.log(customer)
    fetch('https://farmart-api.onrender.com/transactions',{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Authorization": `Bearer ${token}`
      },
      body:JSON.stringify({
        "animal_name": name,
        "customer_name": customer,
        "total_price":price * quantity
      })
    })
    .then((r)=>r.json())
    .then((data)=>{
      rejectOrder(id)
      console.log(data)
    })
  }

  function rejectOrder(id){
    fetch(`https://farmart-api.onrender.com/carts/${id}`,{
      method:"DELETE",
      headers:{Authorization: `Bearer ${token}`}
    })
    .then((r)=>r.json())
    .then((data)=>{
      console.log(data)
      dispatch(rejectAnimal(id))
      console.log(order)
    })
  }
  
    

  return (
    <div className="card mt-3" >
        <h6 className='text-center bg-light form-control'>order number: {orders.id}</h6>

        <div className="row g-0">
              <div className="col-md-2">
                <img src={orders.animal.image_url} className="img-fluid rounded-start" alt={orders.animal.name}></img>
              </div>
              <div className="col-md-10">

                <div className="row g-0">
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">Buyer Name: <span className='text-primary'>{orders.user.username}</span></h5>
                      <h6 className="card-title">Buyer Email: <span className='text-primary'>{orders.user.email}</span></h6>
                      <h6 className="card-title">Buyer Location: <span className='text-primary'>{orders.user.address}</span></h6>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">Animal Name: <span className='text-primary'>{orders.animal.name}</span></h5>
                        <h6 className="card-title">quantity required: <span className='text-primary'>{orders.quantity}</span></h6>
                      <button onClick={() => acceptOrder(orders.animal.name, orders.user.username,  orders.animal.price, orders.quantity, orders.id)} className='btn text-success ms-auto bg-white' >accept</button>
                      <button onClick={() => rejectOrder(orders.id)} className='text-danger btn bg-white'>reject</button>
                    </div>
                  </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default OrdersItem