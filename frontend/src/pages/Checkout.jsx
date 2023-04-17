import React from 'react'
import {Footer , Navbar } from "../components";
import { useSelector} from "react-redux";
import {Link} from "react-router-dom";
import { Container } from 'react-bootstrap';

export const Checkout = () => {
    const state = useSelector((state)=>state.handleCart); 
        const EmptyCart = () => {
         return(
         <div className="conatiner">
                <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">No item in Cart</h4>
            <Link to="/" className="btn btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
         </div>
         
         );
        }
        const  showCheckout = () => {
            let subtotal = 0;
            let shipping = 30.0;
            let totalItems = 0;
            state.map(items) =>{
                return (subtotal += item.price * item.qty);
            });
            state.map((item)=> {
                return (totalItems += item.qty);
            })
            return (
                
            
            
            )
        }