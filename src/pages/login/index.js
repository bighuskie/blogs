import React, { PureComponent } from "react";
import "./style.scss";
import { connect } from "react-redux";
import { actionCreators } from "./store";
//异步加载组件时对应组件可以获取路由信息
import { Redirect ,withRouter} from "react-router-dom";

class Login extends PureComponent {
  render() {
    let { isLogin, handleLogin } = this.props;
    if (!isLogin) {
      return (
        <div className="login-wrapper">
          <h4 className="title-wrapper">
            <div>
              <a href="#" className="active">
                登录
              </a>
              <b>·</b>
              <a href="#">注册 </a>
            </div>
          </h4>
          <form>
            <section className="info-wrapper">
              <label>
                <input placeholder="手机号或邮箱" id="account" ref="account" />
              </label>
              <label>
                <input
                  placeholder="密码"
                  type="password"
                  id="password"
                  ref="password"
                />
              </label>
            </section>
            <section className="tip-wrapper">
              <input type="checkbox" />
              记住我
              <a href="#" className="question">
                登录遇到问题?
              </a>
            </section>
            <div
              className="login-btn"
              onClick={() => handleLogin(this.refs.account, this.refs.password)}
            >
              登录
            </div>
          </form>
        </div>
      );
    } else {
      // 登录成功重定向到首页
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.getIn(["Login", "isLogin"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleLogin(account, password) {
      dispatch(actionCreators.login(account.value, password.value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Login));
