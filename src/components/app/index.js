import React from "react";
//可以向组件注入store数据
import { Provider } from "react-redux";
import store from "../../store/store";
//引入路由
import { BrowserRouter, Route } from "react-router-dom";
import "./style.scss";
import Header from "../header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Header />
          <BrowserRouter>
            <Route path="/" exact render={() => <div>hello</div>} />
            <Route path="/index" exact render={() => <div>world</div>} />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
