import * as actionTypes from "./constants";

let defaultState = {
  isFocus: false
};

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    return {
      isFocus: true
    };
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return {
      isFocus: false
    };
  }
  return state;
};
