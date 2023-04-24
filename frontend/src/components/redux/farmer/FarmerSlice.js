import { REMOVE_FARMER, LOGIN_FARMER, LOAD_FARMER, LOGIN_FARMER_ERROR } from "./FarmerType";

const initialState = {
    isLoading: false,
    farmer: null,
    error: '',
    navigate: false
}


const farmerSlice = (state=initialState, action)=>{
    switch(action.type){
        case LOAD_FARMER: return {
            ...state,
            isLoading: true,
        };

        case LOGIN_FARMER: return {
            ...state,
            isLoading: false,
            farmer: action.payload,
            token: action.payload.data.token,
            navigate: true,
            error: ""
        }
        case LOGIN_FARMER_ERROR: return {
            ...state,
            isLoading: false,
            error: action.payload,
            navigate: false,
            farmer: null
        }
        default: return state
    }
}

export default farmerSlice