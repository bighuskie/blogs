//引入immutable.js时state变为immutable对象
import { fromJS } from "immutable";

let defaultState = fromJS({
  topicData: [
    {
      id: 1,
      title: "动漫",
      imgUrl:
        "http://img0.imgtn.bdimg.com/it/u=3843255790,1398194940&fm=26&gp=0.jpg"
    },
    {
      id: 2,
      title: "前端",
      imgUrl:
        "http://img0.imgtn.bdimg.com/it/u=3843255790,1398194940&fm=26&gp=0.jpg"
    },
    {
      id: 3,
      title: "前端",
      imgUrl:
        "http://img0.imgtn.bdimg.com/it/u=3843255790,1398194940&fm=26&gp=0.jpg"
    },
    {
      id: 4,
      title: "前端",
      imgUrl:
        "http://img0.imgtn.bdimg.com/it/u=3843255790,1398194940&fm=26&gp=0.jpg"
    },
    {
      id: 5,
      title: "前端",
      imgUrl:
        "http://img0.imgtn.bdimg.com/it/u=3843255790,1398194940&fm=26&gp=0.jpg"
    },
    {
      id: 6,
      title: "前端",
      imgUrl:
        "http://img0.imgtn.bdimg.com/it/u=3843255790,1398194940&fm=26&gp=0.jpg"
    },
    {
      id: 7,
      title: "前端",
      imgUrl:
        "http://img0.imgtn.bdimg.com/it/u=3843255790,1398194940&fm=26&gp=0.jpg"
    },
    {
      id: 8,
      title: "前端",
      imgUrl:
        "http://img0.imgtn.bdimg.com/it/u=3843255790,1398194940&fm=26&gp=0.jpg"
    },
    {
      id: 9,
      title: "前端",
      imgUrl:
        "http://img0.imgtn.bdimg.com/it/u=3843255790,1398194940&fm=26&gp=0.jpg"
    }
  ],
  blogListData: [
    {
      id: 1,
      title: "30个极大提高开发效率的Visual Studio Code插件",
      info:
        "学习笔记，非原创。谢谢 我们的 VSC(VSCode)将会像一个长了五只可以发射激光的独角兽一样！接下来会介绍我每天使用的非常有用的插件。如果你还是一个 VSC 的新手，那么点击左侧最下方的按钮来安装插件。",
      imgUrl:
        "https://upload-images.jianshu.io/upload_images/16375643-0ea5ed5fbcc21051.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 2,
      title: "30个极大提高开发效率的Visual Studio Code插件",
      info:
        "学习笔记，非原创。谢谢 我们的 VSC(VSCode)将会像一个长了五只可以发射激光的独角兽一样！接下来会介绍我每天使用的非常有用的插件。如果你还是一个 VSC 的新手，那么点击左侧最下方的按钮来安装插件。",
      imgUrl:
        "https://upload-images.jianshu.io/upload_images/16375643-0ea5ed5fbcc21051.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 3,
      title: "30个极大提高开发效率的Visual Studio Code插件",
      info:
        "学习笔记，非原创。谢谢 我们的 VSC(VSCode)将会像一个长了五只可以发射激光的独角兽一样！接下来会介绍我每天使用的非常有用的插件。如果你还是一个 VSC 的新手，那么点击左侧最下方的按钮来安装插件。",
      imgUrl:
        "https://upload-images.jianshu.io/upload_images/16375643-0ea5ed5fbcc21051.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 4,
      title: "30个极大提高开发效率的Visual Studio Code插件",
      info:
        "学习笔记，非原创。谢谢 我们的 VSC(VSCode)将会像一个长了五只可以发射激光的独角兽一样！接下来会介绍我每天使用的非常有用的插件。如果你还是一个 VSC 的新手，那么点击左侧最下方的按钮来安装插件。",
      imgUrl:
        "https://upload-images.jianshu.io/upload_images/16375643-0ea5ed5fbcc21051.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    }
  ]
});

export default (state = defaultState, action) => {
  return state;
};
