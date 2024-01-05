const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
  console.log('Client connected'); // 当有客户端连接时打印日志

  // 处理消息
  socket.on('message', (message) => {
    console.log('Received message: ' + message); // 打印接收到的消息

    // 广播消息给所有客户端
    server.clients.forEach((client) => {
      if (client !== socket && client.readyState === WebSocket.OPEN) {
        client.send(message); // 发送消息给所有其他客户端
      }
    });
  });

  // 处理断开连接
  socket.on('close', () => {
    console.log('Client disconnected'); // 当客户端断开连接时打印日志
  });
});
