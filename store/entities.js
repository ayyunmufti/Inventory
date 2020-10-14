import { combineReducers } from "redux";
import customerReducer from "./customer";
import SuppliersReducer from "./Suppliers";

export default combineReducers({
  customer: customerReducer,
  Suppliers: SuppliersReducer,
});
