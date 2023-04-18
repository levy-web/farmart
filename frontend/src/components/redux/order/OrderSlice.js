import { ADD_ORDER, FETCH_ORDERS, LOAD_ORDERS } from "./OrderType"

const initialState = {
    status: false,
    orders: [],
    error: '',
}


const orderSlice = (state=initialState, action)=>{
    switch(action.type){
        case LOAD_ORDERS: return {
            ...state,
            status: true,
        };

        case FETCH_ORDERS: return {
            ...state,
            status: false,
            orders: [...action.payload]
        }
        case ADD_ORDER: return {
            ...state,
            myAnimals: [...state.myAnimals, action.payload]
        }
        default: return state
    }
}

export default orderSlice
