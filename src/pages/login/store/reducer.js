//引入immutable.js时state变为immutable对象
import { fromJS } from "immutable";
import { actionTypes } from "./index";

let defaultState = fromJS({
  isLogin: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_FLAG:
      return state.set("isLogin",action.result);
    case actionTypes.LOGIN_OUT:
      return state.set("isLogin",action.result);
    default:
      return state;
  }
};
