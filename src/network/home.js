// 封装所有首页相关的数据
import { request } from "./request";

export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}