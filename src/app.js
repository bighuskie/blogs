import React from "react";
//可以向组件注入store数据
import { Provider } from "react-redux";
import store from "./store/store";
//引入路由
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Header from "./components/header";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/detail" exact component={Detail} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
