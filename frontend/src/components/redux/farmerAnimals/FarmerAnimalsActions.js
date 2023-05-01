import {toast} from 'react-hot-toast'
import { logoutFarmer } from "../farmer/FarmerAction";
import { ADD_ANIMAL, FETCH_ERROR,  FETCH_ANIMALS, LOAD_ANIMALS } from "./FarmerAnimalsTypes";

export const addAnimal = ((animal)=>{
    return{
        type: ADD_ANIMAL,
        payload:animal
    }
})

export function fetchAnimals(token) {


    return async function (dispatch) {
      dispatch({ type: LOAD_ANIMALS });

      try {

        const response = await fetch(`https://farmart-api.onrender.com/my-animals`, {
          method:"GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        if (!response.ok) {
          
          dispatch({
            type: FETCH_ERROR,
            payload: 'Network response was not ok'
          })
          toast.error('Network response was not ok')
        }
        const data = await response.json();
        if (data.status === "ok") {
          dispatch({
            type: FETCH_ANIMALS,
            payload: data.data,
          })          
        }else if(data.data.info === "Signature has expired"){
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
    
      }catch (error){
        console.error(error)
        dispatch({
          type: FETCH_ERROR,
          payload: (error)
        })
      }
      
  



      // fetch("https://farmart-api.onrender.com/animals")
      //   .then((response) => response.json())
      //   .then((data) =>
      //     dispatch({
      //       type: FETCH_ANIMALS,
      //       payload: data,
      //     })
      //   );
    };
}

