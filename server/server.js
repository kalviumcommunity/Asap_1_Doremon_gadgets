const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const connection = require("./config/dB");
const port = process.env.PUBLIC_PORT;
const route = require("./routes");

// define the ping route
app.get("/", (req, res) => {
  res.json({
    message: "o_O",
    database: connectToDB() ? "connected" : "disconnected",
  });
});
app.get("/ping", (req, res) => {
  res.send("pong");
});

// Using router middleware
app.use(route);

//connection
const connectToDB = async () => {
  try {
    await mongoose.connect(connection.mongoURI);
  } catch (err) {
    console.error(err);
  }
};
const disconnectFromDB = async () => {
  try {
    await mongoose.disconnect();
    console.log("📦 disconnected from MongoDB");
  } catch (err) {
    console.error("❌ error disconnecting from MongoDB:", err.message);
  }
};

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;