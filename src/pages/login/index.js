import React, { PureComponent } from "react";
import "./style.scss";

class Login extends PureComponent {
  render() {
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
              <input placeholder="手机号或邮箱" id="account" />
            </label>
            <label>
              <input placeholder="密码" type="password" id="password" />
            </label>
          </section>
          <section className="tip-wrapper">
            <input type="checkbox" />
            记住我
            <a href="#" className="question">登录遇到问题?</a>
          </section>
          <button className="login-btn">登录</button>
        </form>
      </div>
    );
  }
}

export default Login;
