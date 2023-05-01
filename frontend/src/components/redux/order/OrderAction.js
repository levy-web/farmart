import {toast} from 'react-hot-toast'
import { logoutFarmer } from "../farmer/FarmerAction";
import { REJECT_ORDERS, FETCH_ERROR,  ADD_ORDER, FETCH_ORDERS, LOAD_ORDERS } from "./OrderType";

export const rejectAnimal = ((id)=>{
  return{
      type: REJECT_ORDERS,
      payload:id
  }
})


export function fetchOrders(token) {
    return function (dispatch) {
      dispatch({ type: LOAD_ORDERS });
      fetch("https://farmart-api.onrender.com/carts",{
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
          }
      })
        .then((response) => response.json())
        .then((data) =>{
          if (data.status === "ok") {
            console.log(data)
            dispatch({
              type: FETCH_ORDERS,
              payload: data
            })}
          else if(data.data.info === "Signature has expired"){
            dispatch({
              type: FETCH_ERROR,
              payload: "token expired, login"
            })
            dispatch(logoutFarmer())
            toast.error('token expired, login')
            
  
          }else if(data.data.status === "unauthorized"){
            dispatch({
              type: FETCH_ERROR,
              payload: "login to access content"
            })
            dispatch(logoutFarmer())
            toast.error('login to access content')
                   
          }else{
            console.log(data)
          }

        })
    };
}