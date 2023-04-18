import { ADD_ORDER, FETCH_ORDERS, LOAD_ORDERS } from "./OrderType";


export function fetchOrders() {
    return function (dispatch) {
      dispatch({ type: LOAD_ORDERS });
      fetch("/orders")
        .then((response) => response.json())
        .then((data) =>
          dispatch({
            type: FETCH_ORDERS,
            payload: data[3].animals,
          })
        );
    };
}