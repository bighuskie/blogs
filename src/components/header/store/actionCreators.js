import * as actionTypes from "./constants";
import axios from "axios";
import { fromJS } from "immutable";

const getInfoList = data => {
  // console.log(fromJS(data));
  return {
    type: actionTypes.GET_INFOLIST,
    data: fromJS(data),
    totalPages: Math.ceil(data.length / 10)
  };
};

export const searchFocus = () => {
  return {
    type: actionTypes.SEARCH_FOCUS
  };
};

export const searchBlur = () => {
  return {
    type: actionTypes.SEARCH_BLUR
  };
};

export const getList = () => {
  return dispatch => {
    axios
      .get("/api/header/infoList.json")
      .then(res => {
        const data = res.data;
        dispatch(getInfoList(data.infoList));
      })
      .catch(err => {
        console.log("error");
      });
  };
};

export const mouseEnter = () => {
  return {
    type: actionTypes.MOUSE_ENTER
  };
};

export const mouseLeave = () => {
  return {
    type: actionTypes.MOUSE_LEAVE
  };
};
export const changePage = nextPage => {
  return {
    type: actionTypes.CHANGE_PAGE,
    nextPage
  };
};
