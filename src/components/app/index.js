import React from "react";
//可以向组件注入store数据
import { Provider } from "react-redux";
import store from "../../store/store";
import "./style.scss";
import Header from "../header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Header />
        </Provider>
      </div>
    );
  }
}

export default App;
