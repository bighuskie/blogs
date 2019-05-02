import React, { Component } from "react";
import "./style.scss";

class BlogList extends Component {
  render() {
    return (
      <section className="list-wrapper">
        <div className="item-wrapper">
          <div className="info-wrapper">
            <a href="#" className="title">
              30个极大提高开发效率的Visual Studio Code插件
            </a>
            <div className="text">
              学习笔记，非原创。谢谢 我们的
              VSC(VSCode)将会像一个长了五只可以发射激光的独角兽一样！接下来会介绍我每天使用的非常有用的插件。
              如果你还是一个 VSC 的新手，那么点击左侧最下方的按钮来安装插件。
            </div>
          </div>
          <a href="#" className="pic-wrapper">
            <img
              className="pic"
              src="https://upload-images.jianshu.io/upload_images/16375643-0ea5ed5fbcc21051.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt=""
            />
          </a>
        </div>
      </section>
    );
  }
}

export default BlogList;
