import axios from "axios";
import { actionTypes } from "./index";

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
