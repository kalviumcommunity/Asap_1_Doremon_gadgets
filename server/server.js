const express = require("express");
const { GadgetsModel } = require("./model/users");
const cors = require("cors");
require("dotenv").config();
const { router } = require("./routes");
const { connected } = require("./config/dB");

const app = express();
const port = process.env.PUBLIC_PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(router);

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

app.post("/post", async (req, res) => {
  try {
    let ans = await GadgetsModel.create(req.body).then((el) => {
      res.json(el);
    });
  } catch (error) {
    res.send("Error while posting the data", error);
  }
});

//connection

app.listen(port, () => {
  connected();
  console.log(`🚀 server running on PORT: ${port}`);
});

module.exports = app;
