//引入immutable.js时state变为immutable对象
import { fromJS } from "immutable";
import { actionTypes } from "./index";

let defaultState = fromJS({
  articleTitle: "",
  articleContent: ""
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_ARTICLE_DETAIL:
      return state.merge({
        articleTitle: action.articleTitle,
        articleContent: action.articleContent
      });
    default:
      return state;
  }
};
