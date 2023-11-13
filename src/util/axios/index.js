import axios from "axios";
import qs from "qs";

// 创建 Axios 实例
const instance = axios.create({
  baseURL: "http://127.0.0.1:9200", // 设置你的 API 地址
  timeout: 5000, // 设置请求超时时间
});

let token = ""; // 初始化 token

// 设置 token 的函数
export function setToken(newToken = localStorage.getItem("token")) {
  token = newToken;
  // 在请求头中添加 token
  if (token) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
}

export function api(method, url, data) {
  return instance({
    method: method,
    url: url,
    data: qs.stringify(data),
  });
}
