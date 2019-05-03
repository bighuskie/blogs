import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";
import { actionCreators } from "./store";
//异步加载组件时对应组件可以获取路由信息
import { withRouter } from "react-router-dom";

class Detail extends Component {
  componentDidMount() {
    let { getArticleDetail } = this.props;
    let articleId = this.props.match.params.id;
    getArticleDetail(articleId);
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
    getArticleDetail(id) {
      dispatch(actionCreators.getArticleDetail(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Detail));
