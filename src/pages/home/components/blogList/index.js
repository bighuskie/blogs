import React, { Component } from "react";
//引入react-redux
import { connect } from "react-redux";
import "./style.scss";

class BlogList extends Component {
  render() {
    let { blogListData } = this.props;
    let blogListArray = blogListData.toJS();
    return (
      <section className="list-wrapper">
        {blogListArray.map(item => {
          return (
            <div className="item-wrapper" key={item.id}>
              <div className="info-wrapper">
                <a href="#" className="title">
                  {item.title}
                </a>
                <div className="text">{item.info}</div>
              </div>
              <a href="#" className="pic-wrapper">
                <img className="pic" src={item.imgUrl} alt="" />
              </a>
            </div>
          );
        })}
      </section>
    );
  }
}
const mapStateToProps = state => {
  return {
    blogListData: state.getIn(["Home", "blogListData"])
  };
};

export default connect(
  mapStateToProps,
  null
)(BlogList);
