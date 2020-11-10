const express = require("express");
const app = express();
const path = require("path");
const server = require("http").createServer(app);
const WebSocket = require("ws");

const publicPath = path.join(__dirname, "../../public");
const port = 8080;
const wss = new WebSocket.Server({ server });

app.use(express.static(publicPath));

app.get("*", (request, response) => {});

wss.on("connection", function connection(ws) {
  ws.on("message"),
    function incoming(data) {
      wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState == WebSocket.OPEN) {
          client.send(data);
        }
      });
    };
});

server.listen(port, function() {
  console.log(`Server is ready on port ${port}!`);
});
