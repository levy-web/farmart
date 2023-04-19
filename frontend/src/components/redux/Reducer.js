import { combineReducers } from "redux";
import myAnimalsSlice from "./farmerAnimals/FarmerAnimalsSlice";
import orderSlice from "./order/OrderSlice";
import handleCart from '../../redux/reducer/handleCart';

const rootReducer = combineReducers({
    myAnimals: myAnimalsSlice,
    orders: orderSlice,
    handleCart
});

export default rootReducer;