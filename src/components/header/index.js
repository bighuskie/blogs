import React from "react";
import { connect } from "react-redux";
import "./style.scss";
//Css动画插件
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";

class Header extends React.Component {
  //搜索展示内容
  showInfo = showFlag => {
    if (showFlag) {
      return (
        <div className="info-wrapper">
          <div className="head-wrapper">
            热门搜索
            <span>换一批</span>
          </div>
          <div className="item-wrapper">
            <a>教育</a>
            <a>教育</a>
            <a>教育</a>
            <a>教育</a>
            <a>教育</a>
            <a>教育</a>
            <a>教育</a>
            <a>教育</a>
          </div>
        </div>
      );
    }
  };
  render() {
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
                  in={this.props.isFocus}
                  timeout={200}
                  classNames="slide"
                >
                  <input
                    placeholder="搜索"
                    className={this.props.isFocus ? "focused" : ""}
                    onFocus={this.props.handleInputFocus}
                    onBlur={this.props.handleInputBlur}
                  />
                </CSSTransition>
                <span
                  className={
                    this.props.isFocus ? "focused iconfont" : "iconfont"
                  }
                >
                  &#xe6e4;
                </span>
                {this.showInfo(this.props.isFocus)}
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
  }
}

const mapStateToProps = state => {
  //state.Header已经变为immtable对象,需要使用特定的API
  return {
    isFocus: state.get("Header").get("isFocus")
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
