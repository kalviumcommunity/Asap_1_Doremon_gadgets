const express = require("express");
const {GadgetsModel} = require("./model/users");

const router = express.Router();

router.get("/get", (req, res) => {
  res.send("It's a get req");
});

router.get("/test",async(req,res)=>{
  try {
    let ans = await GadgetsModel.find()
    res.send(ans)
    
  } catch (error) {
    res.send("error")
  }
})

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
