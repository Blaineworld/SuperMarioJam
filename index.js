'use strict';

const WebSocket = require("ws");

const server = new WebSocket.Server({ "port": 8080 });

server.on("connection", console.log);