import { combineReducers } from "redux";
import myAnimalsSlice from "./farmerAnimals/FarmerAnimalsSlice";
import orderSlice from "./order/OrderSlice";

const rootReducer = combineReducers({
    myAnimals: myAnimalsSlice,
    orders: orderSlice,
});

export default rootReducer;