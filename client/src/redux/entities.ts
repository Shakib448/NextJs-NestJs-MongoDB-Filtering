import { combineReducers } from "redux";
import orderReducer from "./slices/orderSlice";

export default combineReducers({
  order: orderReducer,
});
