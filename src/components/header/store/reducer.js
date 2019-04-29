import * as actionTypes from "./constants";

//引入immutable.js时state变为immutable对象
import { fromJS } from "immutable";

let defaultState = fromJS({
  isFocus: false,
  infoList: []
});

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    //immutable的set方法会结合之前immutable的值和设置的值返回一个新的对象
    return state.set("isFocus", true);
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set("isFocus", false);
  }
  return state;
};
