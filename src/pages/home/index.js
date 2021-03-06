//PureComponent(只有相关组件的state发生改变时对应组件重新render)最好与immutable一起使用，要不然很多坑
import React, { PureComponent } from "react";
import "./style.scss";
//引入组件
import Topic from "./components/topic";
import BlogList from "./components/blogList";
import Recommend from "./components/recommend";
import Writer from "./components/writer";
import FixedView from "./components/fixedview";
//引入react-redux
import { connect } from "react-redux";
import { actionCreators } from "./store";

class Home extends PureComponent {
  componentDidMount() {
    let { changeHomeReducer } = this.props;
    changeHomeReducer();
  }
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
        <FixedView />
      </main>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    changeHomeReducer() {
      const action = actionCreators.getHomeData();
      dispatch(action);
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
