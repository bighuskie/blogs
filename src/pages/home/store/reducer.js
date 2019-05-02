//引入immutable.js时state变为immutable对象
import { fromJS } from "immutable";
import { actionTypes } from "./index";


let defaultState = fromJS({
  topicData: [],
  blogListData: [],
  recommendData: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_REDUCER:
      return state.merge({
        topicData: fromJS(action.topicData),
        blogListData: fromJS(action.blogListData),
        recommendData: fromJS(action.recommendData)
      });
    default:
      return state;
  }
};
