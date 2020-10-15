var pwd = "31d8a6a84ac40db306e29383254ac344"
var ws = new WebSocket("wss://btm.multigamessl.com:8444/websocket");

function sendStr(obj){
    ws.send(JSON.stringify(obj));
}

ws.onopen = function(){
    console.log("ws: onopen");
    sendStr({"a":0,"c":0,"p":{"api":"1.7.1","cl":"JavaScript"}})
}

ws.onclose = function(){
    console.log("ws: onclose");
}

ws.onmessage = function(){
    console.log("ws: onmessage");
}

ws.onerror = function(){
    console.log("ws: onerror");
}
