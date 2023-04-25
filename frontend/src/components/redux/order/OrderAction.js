import { REJECT_ORDERS, ADD_ORDER, FETCH_ORDERS, LOAD_ORDERS } from "./OrderType";

export const rejectAnimal = ((id)=>{
  return{
      type: REJECT_ORDERS,
      payload:id
  }
})


export function fetchOrders() {
    return function (dispatch) {
      dispatch({ type: LOAD_ORDERS });
      fetch("https://farmart-api.onrender.com/carts",{
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("TOKEN")}`
          }
      })
        .then((response) => response.json())
        .then((data) =>{
          console.log(data)
          dispatch({
            type: FETCH_ORDERS,
            payload: data
          })}
        );
    };
}