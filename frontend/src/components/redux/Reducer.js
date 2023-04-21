import { combineReducers } from "redux";
import myAnimalsSlice from "./farmerAnimals/FarmerAnimalsSlice";
import orderSlice from "./order/OrderSlice";
import handleCart from '../../redux/reducer/handleCart';
import userSlice from "./user/UserSlice";

const rootReducer = combineReducers({
    myAnimals: myAnimalsSlice,
    orders: orderSlice,
    user:userSlice,
    handleCart
});

export default rootReducer;