//使用redux-immutable库使state变为immutable对象
import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from "../components/header/store";
import { reducer as homeReducer } from "../pages/home/store";
export default combineReducers({
  Header: headerReducer,
  Home: homeReducer
});