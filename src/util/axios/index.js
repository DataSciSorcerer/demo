import axios from "axios";
import qs from "qs";

export function api(method, url, data) {
  return axios({
    method: method,
    url: "http://127.0.0.1:9200" + url,
    data: qs.stringify(data),
  });
}
