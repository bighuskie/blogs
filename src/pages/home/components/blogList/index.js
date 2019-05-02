import React, { PureComponent } from "react";
import "./style.scss";
//引入react-redux
import { connect } from "react-redux";
import { actionCreators } from "../../store";
import { Link } from "react-router-dom";

class BlogList extends PureComponent {
  render() {
    let { blogListData, getMoreList, blogPage } = this.props;
    let blogListArray = blogListData.toJS();
    return (
      <section className="list-wrapper">
        {blogListArray.map((item, index) => {
          return (
            <div className="item-wrapper" key={`${item.id}${index}`}>
              <div className="info-wrapper">
                <Link to="/detail" className="title">
                  {item.title}
                </Link>
                <div className="text">{item.info}</div>
              </div>
              <a href="#" className="pic-wrapper">
                <img className="pic" src={item.imgUrl} alt="" />
              </a>
            </div>
          );
        })}
        <div className="readMore-wrapper" onClick={() => getMoreList(blogPage)}>
          阅读更多
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return {
    blogListData: state.getIn(["Home", "blogListData"]),
    blogPage: state.getIn(["Home", "blogPage"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    /**
     * 点击加载更多内容
     */
    getMoreList(currentPage) {
      dispatch(actionCreators.getMoreList(currentPage));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogList);
