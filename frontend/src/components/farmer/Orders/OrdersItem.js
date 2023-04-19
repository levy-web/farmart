import React from 'react'

function OrdersItem({orders}) {
    

  return (
    <div className="card mt-3" >
        <h6>order number: {orders.id}</h6>
        <span className='ms-auto'><button className='text-success me-2'>accept</button><button className='text-danger me-2'>reject</button></span>
        <div className="row g-0">
            <div className="col-md-1">
                <img src={orders.img_url} className="img-fluid rounded-start" alt={orders.name}></img>
                </div>
                <div className="col-md-6">
                <div className="card-body">
                    <h5 className="card-title">{orders.name}</h5>
                    <h5 className="card-title">{orders.age}</h5>
                    {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrdersItem