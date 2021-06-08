const express = require("express");
const routes = require("../src/app");

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

routes.setFor(server);

module.exports = server;
