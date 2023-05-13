import { combineReducers } from "redux";

import equipmentReducer from "./EquipmentReducer";
import customerReducer from "./UserReducer";

const RootReducer = combineReducers({
  equipmentsList: equipmentReducer,
  customerList:customerReducer
});
export default RootReducer;
