export let ws: WebSocket | null = null

export function connect() {
  ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
  ws.onopen = function () {
    console.log('WebSocket connected');
    // subscribe to some channels
    // ws.send(JSON.stringify({
    //   //.... some message the I must send when I connect ....
    // }));
  };

  ws.onmessage = function (e) {
    console.log('Message:' + e.data)
  }

  ws.onclose = function (e) {
    ws?.close()
    console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason);
    setTimeout(function () {
      connect();
    }, 1000);
  };

  ws.onerror = function (err) {
    console.error('Socket encountered error: ', err, 'Closing socket')
    ws?.close()
  };
}

