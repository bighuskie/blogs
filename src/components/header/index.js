import React from "react";
import { connect } from "react-redux";
import "./style.scss";
//Css动画插件
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";
import { Link } from "react-router-dom";

class Header extends React.Component {
  //搜索展示内容
  showInfo = () => {
    let {
      isFocus,
      isMouseIn,
      infoList,
      page,
      totalPages,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage
    } = this.props;
    let newInfoList = infoList.toJS();
    let pageList = [];
    if (newInfoList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <a key={newInfoList[i] + `${i}`} href="#">
            {newInfoList[i]}
          </a>
        );
      }
    }
    if (isFocus || isMouseIn) {
      return (
        <div
          className="info-wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="head-wrapper">
            热门搜索
            <span
              onClick={() =>
                handleChangePage(page, totalPages, this.refs.iconspin)
              }
            >
              <i className="iconfont iconspin" ref="iconspin" />
              换一批
            </span>
          </div>
          <div className="item-wrapper">{pageList}</div>
        </div>
      );
    }
  };
  render() {
    let { isFocus, infoList, handleInputFocus, handleInputBlur } = this.props;
    return (
      <header className="header-wrapper">
        <Link className="logo-wrapper" to="/" />
        <nav className="nav-wrapper">
          <ul>
            <li className="left active">首页</li>
            <li className="left">下载App</li>
            <li className="left">
              <form>
                <CSSTransition in={isFocus} timeout={200} classNames="slide">
                  <input
                    placeholder="搜索"
                    className={isFocus ? "focused" : ""}
                    onFocus={() => handleInputFocus(infoList)}
                    onBlur={handleInputBlur}
                  />
                </CSSTransition>
                <span
                  className={
                    isFocus ? "focused iconfont zoom" : "iconfont zoom"
                  }
                >
                  &#xe6e4;
                </span>
                {this.showInfo()}
              </form>
            </li>
            <li className="right">登录</li>
            <li className="right">
              <span className="iconfont">&#xe636;</span>
            </li>
          </ul>
        </nav>
        <div className="btn-wrapper">
          <button className="register">注册</button>
          <button className="write">
            <span className="iconfont">&#xe60b;</span>
            写文章
          </button>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  //state.Header已经变为immtable对象,需要使用特定的API
  return {
    isFocus: state.get("Header").get("isFocus"),
    isMouseIn: state.get("Header").get("isMouseIn"),
    infoList: state.getIn(["Header", "infoList"]),
    page: state.getIn(["Header", "page"]),
    totalPages: state.getIn(["Header", "totalPages"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    /**
     * 鼠标聚焦输入框，设置redux数据
     */
    handleInputFocus(infoList) {
      //只有数据为空时才发ajax请求
      infoList.size <= 0 && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    /**
     * 鼠标失焦输入框，设置redux数据
     */
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    /**
     * 鼠标移进控制热门搜索显示，设置redux数据
     */
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    /**
     * 鼠标移出控制热门搜索显示，设置redux数据
     */
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    /**
     * 换一批热门搜索显示并旋转图标，设置redux数据
     */
    handleChangePage(currentPage, totalPages, ref) {
      let originAngle = ref.style.transform.replace(/[^0-9]/gi, "");
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      ref.style.transform = `rotate(${originAngle + 360}deg)`;
      if (currentPage < totalPages) {
        dispatch(actionCreators.changePage(currentPage + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
