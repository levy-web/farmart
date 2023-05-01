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
     
     try{
      fetch("https://farmart-api.onrender.com/carts",{
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
          }
      })
        .then((response) => {
          if (response.ok){
          return response.json()
          }else{

            dispatch({
              type: FETCH_ERROR,
              payload: "please try again "
            })
            dispatch(logoutFarmer())
            toast.error("please try again")

          }
        })

        .then((data) =>{
          console.log(data)
          dispatch({
            type: FETCH_ORDERS,
            payload: data
          })
        })
      }catch(error){
        console.log(error)
        dispatch({
          type: FETCH_ERROR,
          payload: "please try again "
        })
        dispatch(logoutFarmer())
        toast.error("please try again")
      }
    };
}