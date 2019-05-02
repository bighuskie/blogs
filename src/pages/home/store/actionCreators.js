import axios from "axios";
import { actionTypes } from "./index";

/**
 * 获取首页相关初始数据
 */
const changeHomeAction = data => {
  return {
    type: actionTypes.CHANGE_HOME_REDUCER,
    topicData: data.topicData,
    blogListData: data.blogListData,
    recommendData: data.recommendData
  };
};

export const getHomeData = () => {
  return dispatch => {
    axios
      .get("/api/home.json")
      .then(res => {
        const data = res.data;
        dispatch(changeHomeAction(data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

/**
 * 点击加载更多的action
 */
const getMoreListAction = (data, nextPage) => {
  return {
    type: actionTypes.GET_MORE_BLOG_LIST,
    moreBlogList: data.moreBlogList,
    nextPage
  };
};

export const getMoreList = currentPage => {
  return dispatch => {
    axios
      .get(`/api/morebloglist.json?page=${currentPage}`)
      .then(res => {
        const data = res.data;
        dispatch(getMoreListAction(data, currentPage + 1));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

/**
 * 判断及修改是否显示浮窗action
 */

export const changeShowFixed = showFlag => {
  console.log("hahah")
  return {
    type: actionTypes.CHANGE_SHOW_FIXED,
    showFlag
  };
};
