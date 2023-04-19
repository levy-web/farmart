import { ADD_ANIMAL, LOAD_ANIMALS, FETCH_ANIMALS } from "./FarmerAnimalsTypes";

const initialState = {
    status: false,
    myAnimals: [],
    error: '',
}



const myAnimalsSlice = (state=initialState, action)=>{
    switch(action.type){
        case LOAD_ANIMALS: return {
            ...state,
            status: true,
        };

        case FETCH_ANIMALS: return {
            ...state,
            status: false,
            myAnimals: [...action.payload]
        }

        case ADD_ANIMAL: return {
            ...state,
            myAnimals: [...state.myAnimals, action.payload]
        }
        default: return state
    }
}

export default myAnimalsSlice