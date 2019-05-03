import axios from "axios";
import { actionTypes } from "./index";

/**
 * 获取文章详情页的action
 */
const getDetailAction = data => {
  return {
    type: actionTypes.GET_ARTICLE_DETAIL,
    articleTitle: data.data.articleTitle,
    articleContent: data.data.articleContent
  };
};

export const getArticleDetail = () => {
  return dispatch => {
    axios
      .get("/api/articledetail.json")
      .then(res => {
        const data = res.data;
        dispatch(getDetailAction(data));
      })
      .catch(err => {
        console.log("error");
      });
  };
};
