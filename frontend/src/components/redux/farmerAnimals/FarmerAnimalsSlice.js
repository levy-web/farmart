import { ADD_ANIMAL, FETCH_ERROR, LOAD_ANIMALS, FETCH_ANIMALS } from "./FarmerAnimalsTypes";

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

        case FETCH_ERROR: return {
            ...state,
            status: false,
            error: ''
        }

        case ADD_ANIMAL: return {
            ...state,
            myAnimals: [...state.myAnimals, action.payload]
        }
        default: return state
    }
}

export default myAnimalsSlice