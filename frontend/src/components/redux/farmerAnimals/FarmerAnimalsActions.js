import { ADD_ANIMAL, FETCH_ERROR,  FETCH_ANIMALS, LOAD_ANIMALS } from "./FarmerAnimalsTypes";

export const addAnimal = ((animal)=>{
    return{
        type: ADD_ANIMAL,
        payload:animal
    }
})

export function fetchAnimals() {
    return async function (dispatch) {
      dispatch({ type: LOAD_ANIMALS });

      try {

        const response = await fetch(`https://farmart-api.onrender.com/my-animals`, {
          method:"GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("TOKEN")}`
          }
        })
        if (!response.ok) {
          
          dispatch({
            type: FETCH_ERROR,
            payload: 'Network response was not ok'
          })
        }
        const data = await response.json();
        if (data.status !== "ok") {
          dispatch({
            type: FETCH_ERROR,
            payload: data.data.error
          })
          
        }else{
          dispatch({
            type: FETCH_ANIMALS,
            payload: data.data,
          })
          
        }
    
      }catch (error){
        console.error(error)
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

