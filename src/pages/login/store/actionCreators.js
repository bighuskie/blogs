import axios from "axios";
import { actionTypes } from "./index";

/**
 * 登录功能的action
 */
const loginAction = result => {
  return {
    type: actionTypes.LOGIN_FLAG,
    result
  };
};

export const login = (account, password) => {
  return dispatch => {
    axios
      .get(`/api/login.json?account=${account}&password=${password}`)
      .then(res => {
        const result = res.data.data;
        if (result) {
          dispatch(loginAction(result));
        } else {
          alert("登录失败");
        }
      })
      .catch(err => {
        console.log("error");
      });
  };
};

/**
 * 退出登录功能的action
 */
export const handleloginOut=()=>{
  return {
    type: actionTypes.LOGIN_OUT,
    result:false
  };
};