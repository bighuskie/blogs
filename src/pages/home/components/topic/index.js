import React, { PureComponent } from "react";
//引入react-redux
import { connect } from "react-redux";
import "./style.scss";

class Topic extends PureComponent {
  render() {
    let { topicData } = this.props;
    let topicDataArray = topicData.toJS();
    return (
      <section className="topic-wrapper">
        {topicDataArray.map(item => {
          return (
            <a href="#" className="topic-item" key={item.id}>
              <img src={item.imgUrl} alt="" />
              {item.title}
            </a>
          );
        })}
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    topicData: state.get("Home").get("topicData")
  };
};

export default connect(
  mapStateToProps,
  null
)(Topic);
