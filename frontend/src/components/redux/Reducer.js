import { combineReducers } from "redux";
import myAnimalsSlice from "./farmerAnimals/FarmerAnimalsSlice";
import orderSlice from "./order/OrderSlice";
import handleCart from '../../redux/reducer/handleCart';
import userSlice from "./user/UserSlice";
import farmerSlice from "./farmer/FarmerSlice";

const rootReducer = combineReducers({
    myAnimals: myAnimalsSlice,
    orders: orderSlice,
    user:userSlice,
    farmer:farmerSlice,
    handleCart
});

export default rootReducer;