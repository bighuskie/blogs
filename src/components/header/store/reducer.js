import * as actionTypes from "./constants";

//引入immutable.js时state变为immutable对象
import { fromJS } from "immutable";

let defaultState = fromJS({
  isFocus: false,
  isMouseIn: false,
  infoList: [],
  page: 1,
  totalPages: 1
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      //immutable的set方法会结合之前immutable的值和设置的值返回一个新的对象
      return state.set("isFocus", true);
    case actionTypes.SEARCH_BLUR:
      return state.set("isFocus", false);
    case actionTypes.GET_INFOLIST:
      return state.merge({
        infoList: fromJS(action.data),
        totalPages: action.totalPages
      });
    case actionTypes.MOUSE_ENTER:
      return state.set("isMouseIn", true);
    case actionTypes.MOUSE_LEAVE:
      return state.set("isMouseIn", false);
    case actionTypes.CHANGE_PAGE:
      return state.set("page", action.nextPage);
    default:
      return state;
  }
};
