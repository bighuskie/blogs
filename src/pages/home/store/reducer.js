//引入immutable.js时state变为immutable对象
import { fromJS } from "immutable";
import { actionTypes } from "./index";

let defaultState = fromJS({
  topicData: [],
  blogListData: [],
  recommendData: [],
  blogPage: 1,
  isShowFixed: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_REDUCER:
      return state.merge({
        topicData: fromJS(action.topicData),
        blogListData: fromJS(action.blogListData),
        recommendData: fromJS(action.recommendData)
      });
    case actionTypes.GET_MORE_BLOG_LIST:
      let preBlogListData = state.get("blogListData");
      let newBlogListData = preBlogListData.concat(
        fromJS(action.moreBlogList)
      );
      return state.merge({
        blogListData: newBlogListData,
        blogPage: action.nextPage
      });
    case actionTypes.CHANGE_SHOW_FIXED:
      return state.set("isShowFixed", action.showFlag);
    default:
      return state;
  }
};
