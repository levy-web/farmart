import { ADD_ANIMAL, FETCH_ANIMALS, LOAD_ANIMALS } from "./FarmerAnimalsTypes";

export const addAnimal = ((animal)=>{
    return{
        type: ADD_ANIMAL,
        payload:animal
    }
})

export function fetchAnimals() {
    return function (dispatch) {
      dispatch({ type: LOAD_ANIMALS });
      fetch("https://farmart-api.onrender.com/animals")
        .then((response) => response.json())
        .then((data) =>
          dispatch({
            type: FETCH_ANIMALS,
            payload: data,
          })
        );
    };
}