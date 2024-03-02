const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PUBLIC_PORT;
const { router } = require("./routes");
const { connected } = require("./config/dB");

// define the ping route
app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/ping", (req, res) => {
  res.send("pong");
});

// Using router middleware
app.use(router);

//connection

app.listen(port, () => {
  connected();
  console.log(`🚀 server running on PORT: ${port}`);
});

module.exports = app;
