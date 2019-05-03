## 基于react全家桶的简书项目


## 技术栈
- [react](https://react.docschina.org/)
- [react-redux](https://github.com/reduxjs/react-redux)
- [react-router-dom]()
- [immutable.js](https://github.com/immutable-js/immutable-js)
- [react-loadable](https://github.com/jamiebuilds/react-loadable)
- [redux-thunk](https://github.com/reduxjs/redux-thunk)

| 技术       | 作用           | 相关模块  |
| ------------- |:-------------:| :-----:|
| react-redux      | 引入redux进行全局数据统一管理 | Provider、connect |
| react-router-dom      | 进行路由规则匹配     |   Link、BrowserRouter、Route、 Redirect 、withRouter |
| immutable.js | 将state变为immutable对象，防止直接改变了原来的state      |   fromJS、toJS |
| react-loadable | 构建异步组件，减小bundle.js的体积      |   Loadable |
| redux-thunk | 中间件扩展了store的功能，可以编写与store交互的异步逻辑      |  actionCreator中的返回异步函数 |

