//引入immutable.js时state变为immutable对象
import { fromJS } from "immutable";
import { actionTypes } from "./index";

let defaultState = fromJS({
  articleTitle: "30个极大提高开发效率的Visual Studio Code插件",
  articleContent:
    '<p>如果你还是一个 VSC 的新手，那么点击左侧最下方的按钮来安装插件。</p><img src="https://upload-images.jianshu.io/upload_images/16375643-f7d6853d41ebb056.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/672/format/webp" alt="" /> <p> 我们的VSC(VSCode)将会像一个长了五只可以发射激光的独角兽一样！接下来会介绍我每天使用的非常有用的插件。</p><p>Visual Studio Code 最悠久的主题！</p><img src="https://upload-images.jianshu.io/upload_images/16375643-0ea5ed5fbcc21051.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp" alt=""/><p>该插件会在行尾显示导入的包的大小。为了计算包大小，该插件要使用 Webpack和 babili-webpack-plugin。</p><img src="https://upload-images.jianshu.io/upload_images/16375643-817162c57c14afaf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp" alt="" />'
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SHOW_FIXED:
      return state;
    default:
      return state;
  }
};
