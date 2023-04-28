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
          
        }else{
          dispatch({
            type: LOGIN_FARMER,
            payload: data
          })
          
        }

      }catch (error){
        console.error(error)
      }
      
    };
}

export const logoutFarmer = (()=>{
  return{
      type: REMOVE_FARMER
  }
})
