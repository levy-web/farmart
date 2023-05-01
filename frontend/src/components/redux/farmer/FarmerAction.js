import {toast} from 'react-hot-toast'
import { REMOVE_FARMER, LOGIN_FARMER, LOAD_FARMER, LOGIN_FARMER_ERROR } from "./FarmerType";


export function loginFarmer(email, password) {
  
    return async function (dispatch) {
      
      dispatch({ type: LOAD_FARMER });

      try {

        const response = await fetch(`https://farmart-api.onrender.com/farmer-login`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          "email":email,
          "password":password
          })
        });
        if (!response.ok) {
          
          dispatch({
            type: LOGIN_FARMER_ERROR,
            payload: 'Network response was not ok'
          })
        }
        const data = await response.json();
        if (data.status !== "ok") {
          dispatch({
            type: LOGIN_FARMER_ERROR,
            payload: data.data.error
          })
          toast.error(data.data.error)
          
        }else{
          dispatch({
            type: LOGIN_FARMER,
            payload: data
          })
          toast.success(`${data.message}`);
          
        }

      }catch (error){
        console.error(error)
        dispatch({
          type: LOGIN_FARMER_ERROR,
          payload: error
        })
        toast.error("Check your connection, Network response was not ok")
      }
      
    };
}

export const logoutFarmer = (()=>{
  return{
      type: REMOVE_FARMER
  }
  
})
