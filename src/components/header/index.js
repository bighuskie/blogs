import React from "react";
import { connect } from "react-redux";
import "./style.scss";
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";

const Header = props => {
  return (
    <header className="header-wrapper">
      <a className="logo-wrapper" href="/" />
      <nav className="nav-wrapper">
        <ul>
          <li className="left active">首页</li>
          <li className="left">下载App</li>
          <li className="left">
            <form>
              <CSSTransition
                in={props.isFocus}
                timeout={200}
                classNames="slide"
              >
                <input
                  placeholder="搜索"
                  className={props.isFocus ? "focused" : ""}
                  onFocus={props.handleInputFocus}
                  onBlur={props.handleInputBlur}
                />
              </CSSTransition>
              <span className={props.isFocus ? "focused iconfont" : "iconfont"}>
                &#xe6e4;
              </span>
            </form>
          </li>
          <li className="right">登录</li>
          <li className="right">
            <span className="iconfont">&#xe636;</span>
          </li>
        </ul>
      </nav>
      <div className="btn-wrapper">
        <button className="register">注册</button>
        <button className="write">
          <span className="iconfont">&#xe60b;</span>
          写文章
        </button>
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    isFocus: state.Header.isFocus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
