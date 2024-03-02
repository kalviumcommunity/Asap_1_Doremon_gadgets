const express = require("express");

const router = express.Router();

router.get("/get", (req, res) => {
  res.send("It's a get req");
});

router.post("/post", (req, res) => {
  res.send("It's a post req");
});

router.patch("/patch", (req, res) => {
  res.send("It's a patch req");
});

router.delete("/delete", (req, res) => {
  res.send("It's a delete req");
});

module.exports = {router};
