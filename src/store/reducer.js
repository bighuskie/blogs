//使用redux-immutable库使state变为immutable对象
import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from "../components/header/store";
import { reducer as homeReducer } from "../pages/home/store";
import { reducer as detailReducer } from "../pages/detail/store";
import { reducer as loginReducer } from "../pages/login/store";
export default combineReducers({
  Header: headerReducer,
  Home: homeReducer,
  Detail: detailReducer,
  Login: loginReducer
});
