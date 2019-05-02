import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";
import { actionCreators } from "../../store";

class FixedView extends Component {
  bindScrollEvent = () => {
    let { changeShowFixed } = this.props;
    window.addEventListener("scroll", changeShowFixed);
  };
  componentDidMount() {
    this.bindScrollEvent();
  }
  render() {
    let { isShowFixed, scrollToTop } = this.props;
    return isShowFixed ? (
      <section>
        <ul className="fixed-wrapper">
          <li className="fixed-item" onClick={scrollToTop}>
            顶部
          </li>
        </ul>
      </section>
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    isShowFixed: state.getIn(["Home", "isShowFixed"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    /**
     * 点击回到顶部
     */
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    /**
     * 判断及修改是否显示浮窗
     */
    changeShowFixed() {
      const scroll = document.documentElement.scrollTop;
      if (scroll > 400) {
        dispatch(actionCreators.changeShowFixed(true));
      } else {
        dispatch(actionCreators.changeShowFixed(false));
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FixedView);
