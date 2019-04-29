import React, { Component } from "react";
import "./style.scss";
import { CSSTransition } from "react-transition-group";

class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocus: false
    };
  }
  handleInputFocus = () => {
    this.setState({
      isFocus: true
    });
  };
  handleInputBlur = () => {
    this.setState({
      isFocus: false
    });
  };
  render() {
    return (
      <header className="header-wrapper">
        <a className="logo-wrapper" />
        <nav className="nav-wrapper">
          <ul>
            <li className="left active">首页</li>
            <li className="left">下载App</li>
            <li className="left">
              <form>
                <CSSTransition in={this.state.isFocus} timeout={200} classNames="slide">
                  <input
                    placeholder="搜索"
                    className={this.state.isFocus ? "focused" : ""}
                    onFocus={this.handleInputFocus}
                    onBlur={this.handleInputBlur}
                  />
                </CSSTransition>
                <span
                  className={
                    this.state.isFocus ? "focused iconfont" : "iconfont"
                  }
                >
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
  }
}

export default header;
