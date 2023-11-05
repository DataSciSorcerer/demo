from datetime import datetime
from time import mktime
from wsgiref.handlers import format_date_time
import hmac
import hashlib
import base64
from urllib.parse import urlencode
import websocket
import json

cur_time = datetime.now()
date = format_date_time(mktime(cur_time.timetuple()))

APIKey = "e5df90fc86cb128cc906ad471dc147bc"
APISecret = "NTRhZTAzZDY1MGRkMzUxN2U3YjM3OGQ2"

tmp = "host: " + "spark-api.xf-yun.com" + "\n"
tmp += "date: " + date + "\n"
tmp += "GET " + "/v2.1/chat" + " HTTP/1.1"

tmp_sha = hmac.new(APISecret.encode('utf-8'), tmp.encode('utf-8'),
                   digestmod=hashlib.sha256).digest()

signature = base64.b64encode(tmp_sha).decode(encoding='utf-8')

authorization_origin = f"api_key='{APIKey}', algorithm='hmac-sha256', headers='host date request-line', signature='{signature}'"

authorization = base64.b64encode(
    authorization_origin.encode('utf-8')).decode(encoding='utf-8')

v = {
    "authorization": authorization,
    "date": date,
    "host": "spark-api.xf-yun.com/v2.1/chat"
}

url = "wss://spark-api.xf-yun.com/v2.1/chat?" + urlencode(v)

request_data = {
    "header": {
        "app_id": "d7a80d8e",
        "uid": "12345"
    },
    "parameter": {
        "chat": {
            "domain": "generalv2",
            "temperature": 0.5,
            "max_tokens": 1024
        }
    },
    "payload": {
        "message": {
            "text": [
                {"role": "user", "content": "你是谁"},
                {"role": "assistant", "content": "..."},
                {"role": "user", "content": "你会做什么"}
            ]
        }
    }
}

request_json = json.dumps(request_data)


def on_message(ws, message):
    print(f"Received: {message}")


def on_error(ws, error):
    print(f"Error: {error}")


def on_close(ws):
    print("Connection closed")


def on_open(ws):
    print("Connection opened")
    ws.send(request_json)


ws = websocket.WebSocketApp(url,
                            on_message=on_message,
                            on_error=on_error,
                            on_close=on_close)
ws.on_open = on_open

ws.run_forever()
print(url)
