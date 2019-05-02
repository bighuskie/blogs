import React, { PureComponent } from "react";
//引入react-redux
import { connect } from "react-redux";
import "./style.scss";

class Recommend extends PureComponent {
  render() {
    let { recommendData } = this.props;
    let recommendArray = recommendData.toJS();
    return (
      <section>
        <ul className="list-wrapper">
          {recommendArray.map(item => {
            return (
              <li className="item" key={item.id}>
                <a href="#">
                  <img src={item.imgUrl} alt="" />
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return {
    recommendData: state.getIn(["Home", "recommendData"])
  };
};

export default connect(
  mapStateToProps,
  null
)(Recommend);
