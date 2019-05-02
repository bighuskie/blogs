import React, { Component } from "react";
//引入组件
import Topic from "./components/topic";
import BlogList from "./components/blogList";
import Recommend from "./components/recommend";
import Writer from "./components/writer";
import "./style.scss";

class Home extends Component {
  render() {
    return (
      <main className="container-wrapper">
        <div className="left-wrapper">
          <section className="banner-wrapper">
            <img
              src="https://upload.jianshu.io/admin_banners/web_images/4652/f32e7f414d86d5a1709f8e6f00ec3272fd9f604b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
              alt=""
            />
          </section>
          <Topic />
          <BlogList />
        </div>
        <div className="right-wrapper">
          <Recommend />
          <Writer />
        </div>
      </main>
    );
  }
}

export default Home;
