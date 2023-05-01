import { ADD_ORDER, FETCH_ERROR, FETCH_ORDERS, LOAD_ORDERS, REJECT_ORDERS } from "./OrderType"

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

        case FETCH_ERROR: return {
            ...state,
            status: false,
            error: ''
        }

        case FETCH_ORDERS: return {
            ...state,
            status: false,
            orders: [...action.payload]
        }
        case ADD_ORDER: return {
            ...state,
            myAnimals: [...state.myAnimals, action.payload]
        }
        case REJECT_ORDERS: 
        let rr = state.orders.filter((item)=> item.id !== action.payload)
        return {
            ...state,
            orders: [...rr]
        }
        default: return state
    }
}

export default orderSlice
