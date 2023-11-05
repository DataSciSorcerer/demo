const crypto = require("crypto");
const fetch = require("node-fetch");

// 生成RFC1123时间
function getFormattedDate(date) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = days[date.getUTCDay()];
  const month = months[date.getUTCMonth()];
  const dayNum = date.getUTCDate();
  const year = date.getUTCFullYear();
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();

  const formattedDate = `${day}, ${("0" + dayNum).slice(
    -2
  )} ${month} ${year} ${("0" + hours).slice(-2)}:${("0" + minutes).slice(
    -2
  )}:${("0" + seconds).slice(-2)} GMT`;
  return formattedDate;
}

// 生成tmp所需参数
const host = "spark-api.xf-yun.com";
const curDate = new Date();
const date = getFormattedDate(curDate);

// 生成tmp
let tmp = "host: " + host + "\n";
tmp += "date: " + date + "\n";
tmp += "GET " + "/v1.1/chat" + " HTTP/1.1";

// 生成authorization
const APIKey = "addd2272b6d8b7c8abdd79531420ca3b";
const APISecret = "MjlmNzkzNmZkMDQ2OTc0ZDdmNGE2ZTZi";

const tmp_sha = crypto
  .createHmac("sha256", APISecret)
  .update(tmp)
  .digest("base64");

const signature = Buffer.from(tmp_sha, "binary").toString("base64");

const authorization_origin = `api_key="${APIKey}", algorithm="hmac-sha256", headers="host date request-line", signature="${signature}"`;
let authorization = Buffer.from(authorization_origin).toString("base64");

let v = {
  authorization: authorization,
  date: date,
  host: "spark-api.xf-yun.com",
};

let url =
  "wss://spark-api.xf-yun.com/v1.1/chat?" + new URLSearchParams(v).toString();

console.log(url);

// 发送请求的部分
const ws = new WebSocket('wss://spark-api.xf-yun.com/v1.1/chat');
ws.onopen = function(event) {
  console.log('WebSocket Connected!');
  
  const requestBody = {
    header: {
      app_id: "12345",
      uid: "12345"
    },
    parameter: {
      chat: {
        domain: "general",
        temperature: 0.5,
        max_tokens: 1024
      }
    },
    payload: {
      message: {
        text: [
          { role: "user", content: "你是谁" },
          { role: "assistant", content: "....." },
          { role: "user", content: "你会做什么" }
        ]
      }
    }
  };

  ws.send(JSON.stringify(requestBody));
};

ws.onmessage = function(event) {
  console.log('Message received:', event.data);
};

ws.onerror = function(error) {
  console.error('WebSocket error:', error);
};