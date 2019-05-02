//引入immutable.js时state变为immutable对象
import { fromJS } from "immutable";

let defaultState = fromJS({
  topicData: [
    {
      id: 1,
      title: "动漫",
      imgUrl:"http://img0.imgtn.bdimg.com/it/u=3843255790,1398194940&fm=26&gp=0.jpg"
    },
    {
      id: 2,
      title: "前端",
      imgUrl: "http://img0.imgtn.bdimg.com/it/u=3843255790,1398194940&fm=26&gp=0.jpg"
    },
    {
      id: 3,
      title: "前端",
      imgUrl: "http://img0.imgtn.bdimg.com/it/u=3843255790,1398194940&fm=26&gp=0.jpg"
    },
    {
      id: 4,
      title: "前端",
      imgUrl: "http://img0.imgtn.bdimg.com/it/u=3843255790,1398194940&fm=26&gp=0.jpg"
    },
    {
      id: 5,
      title: "前端",
      imgUrl: "http://img0.imgtn.bdimg.com/it/u=3843255790,1398194940&fm=26&gp=0.jpg"
    },
    {
      id: 6,
      title: "前端",
      imgUrl: "http://img0.imgtn.bdimg.com/it/u=3843255790,1398194940&fm=26&gp=0.jpg"
    },
    {
      id: 7,
      title: "前端",
      imgUrl: "http://img0.imgtn.bdimg.com/it/u=3843255790,1398194940&fm=26&gp=0.jpg"
    },
    {
      id: 8,
      title: "前端",
      imgUrl: "http://img0.imgtn.bdimg.com/it/u=3843255790,1398194940&fm=26&gp=0.jpg"
    },
    {
      id: 9,
      title: "前端",
      imgUrl: "http://img0.imgtn.bdimg.com/it/u=3843255790,1398194940&fm=26&gp=0.jpg"
    },
  ]
});

export default (state = defaultState, action) => {
  return state;
};
