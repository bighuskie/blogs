import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";
import { actionCreators } from "./store";

class Detail extends Component {
  componentDidMount() {
    let { getArticleDetail } = this.props;
    getArticleDetail();
  }
  render() {
    let { articleTitle, articleContent } = this.props;
    return (
      <article className="article-wrapper">
        <h1 className="title">{articleTitle}</h1>
        <div dangerouslySetInnerHTML={{ __html: articleContent }} />
      </article>
    );
  }
}
const mapStateToProps = state => {
  return {
    articleTitle: state.getIn(["Detail", "articleTitle"]),
    articleContent: state.getIn(["Detail", "articleContent"])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    /**
     * 获取文章详情页
     */
    getArticleDetail() {
      dispatch(actionCreators.getArticleDetail());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
