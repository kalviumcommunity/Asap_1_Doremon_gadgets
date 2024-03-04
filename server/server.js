const express = require("express");
const { GadgetsModel } = require("./model/users");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PUBLIC_PORT || 3000;
const { router } = require("./routes");
const { connected } = require("./config/dB");
app.use(cors());

// define the ping route
app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/test", async (req, res) => {
  try {
    let ans = await GadgetsModel.find({});
    res.send(ans);
  } catch (error) {
    res.send("error");
  }
});

// Using router middleware
app.use(router);

//connection

app.listen(port, () => {
  connected();
  console.log(`🚀 server running on PORT: ${port}`);
});

module.exports = app;
