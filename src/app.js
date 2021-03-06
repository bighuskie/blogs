import React from "react";
//可以向组件注入store数据
import { Provider } from "react-redux";
import store from "./store/store";
//引入路由
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";//引入异步组件
import Login from './pages/login/loadable';//引入异步组件

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/detail/:id" exact component={Detail} />
          <Route path="/login" exact component={Login} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
