import {toast} from 'react-hot-toast'
import { REMOVE_USER, LOGIN_USER, LOAD_USERS, LOGIN_USER_ERROR } from "./UserType";


export function loginUser(email, password) {
  
    return async function (dispatch) {
      
      dispatch({ type: LOAD_USERS });

      try {

        const response = await fetch(`https://farmart-api.onrender.com/user-login`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          "email":email,
          "password":password
          })
        });
        if (!response.ok) {
          
          dispatch({
            type: LOGIN_USER_ERROR,
            payload: 'Network response was not ok'
          })

        }
        const data = await response.json();
        if (data.status !== "ok") {
          dispatch({
            type: LOGIN_USER_ERROR,
            payload: data.data.error
          })
          toast.error(data.data.error)
          
        }else{
          dispatch({
            type: LOGIN_USER,
            payload: data
          })
          toast.success(`${data.message}`);
          
        }

      }catch (error){
        console.error(error)
        dispatch({
          type: LOGIN_USER_ERROR,
          payload: error
        })
        toast.error("Check your connection, Network response was not ok")
      }
      
    };


}

export const logoutUser = (()=>{
  return{
      type: REMOVE_USER
  }
})


