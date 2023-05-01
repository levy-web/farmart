import React from "react";
import {toast} from 'react-hot-toast'
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import ProtectedRoute from "../ProtectedRoutes";
import Login from "./Login";


const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const buyer = useSelector((state) => state.user.buyer);
  const token = useSelector((state)=>state.user.token)
  const dispatch = useDispatch();
  console.log(buyer)
  

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">Your Cart is Empty</h4>
            <Link to="/Animal" className="btn  btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  
  function handleSubmit(){
    state.map((item) => {
      fetch('https://farmart-api.onrender.com/carts',{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Authorization": `Bearer ${token}`
        },
        body:JSON.stringify({
          "animal_id": item.id,
          "quantity": item.qty,
          "price": item.price
        })
      })
      .then((r)=>r.json())
      .then((data)=>console.log(data))
    })
  }

  const addItem = (animal) => {
    dispatch(addCart(animal));
  };
  const removeItem = (animal) => {
    dispatch(delCart(animal));
  };

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    state.map((item) => {
      return (subtotal += item.price * item.qty);
    });

    state.map((item) => {
      return (totalItems += item.qty);
    });
    return (
      <>
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Animal List</h5>
                  </div>
                  <div className="card-body">
                    {state.map((item) => {
                      return (
                        <div key={item.id}>
                          <div className="row d-flex align-items-center">
                            <div className="col-lg-3 col-md-12">
                              <div
                                className="bg-image rounded"
                                data-mdb-ripple-color="light"
                              >
                                <img
                                  src={item.image_url}
                                  alt={item.name}
                                  width={100}
                                  height={75}
                                />
                              </div>
                            </div>

                            <div className="col-lg-5 col-md-6">
                              <p>
                                <strong>{item.name}</strong>
                              </p>
                            </div>

                            <div className="col-lg-4 col-md-6">
                              <div
                                className="d-flex mb-4"
                                style={{ maxWidth: "300px" }}
                              >
                                <button
                                  className="btn px-3"
                                  onClick={() => {
                                    removeItem(item);
                                  }}
                                >
                                  <i className="fas fa-minus"></i>
                                </button>

                                <p className="mx-5">{item.qty}</p>

                                <button
                                  className="btn px-3"
                                  onClick={() => {
                                    addItem(item);
                                  }}
                                >
                                  <i className="fas fa-plus"></i>
                                </button>
                              </div>

                              <p className="text-start text-md-center">
                                <strong>
                                  <span className="text-muted">{item.qty}</span>{" "}
                                  x ksh{item.price}
                                </strong>
                              </p>
                            </div>
                          </div>

                          <hr className="my-4" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3 bg-light">
                    <h5 className="mb-0">Order Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Animals ({totalItems})<span>ksh{Math.round(subtotal)}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>ksh{shipping}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                        </div>
                        <span>
                          <strong>ksh{Math.round(subtotal + shipping)}</strong>
                        </span>
                      </li>
                    </ul>

                    {/* <Link
                      // to="/checkout"
                      className="btn btn-dark btn-lg btn-block"
                      onClick={handleSubmit}
                    >
                      Go to checkout
                    </Link> */}
                    {buyer ? <PayPalScriptProvider options={
                      
                      {
                        "client-id": "AXnhzv7-zUuVn_PtR1ZffFRBl52cuVj0muaSpIpnjs7qBJsYn8CKpjGyeZ4Z-ATpP7EQgtc9Ri1kLWhE" 
                      }
                      }>
                        
                         <PayPalButtons style={{ layout: "horizontal" }}                   
                            createOrder={(data, actions) => {
                              data = Math.round((subtotal + shipping)/120)
                              
                              return actions.order.create({
                                  purchase_units: [
                                      {
                                          amount: {
                                              value: data,
                                          },
                                      },
                                  ],
                              });
                            }}
                            onApprove={(data, actions) => {
                              return actions.order.capture().then((details) => {
                                  const name = details.payer.name.given_name;
                                  
                                  handleSubmit()
                                  toast.success(`Transaction completed by ${name}`);
                                  
                              });
                            }}
                        /> 
                       
                    </PayPalScriptProvider> :   <Link
                        to="/login"
                        className="btn btn-dark btn-lg btn-block"
                        
                      >
                        Login to checkout
                      </Link>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Cart</h1>
        <hr />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
