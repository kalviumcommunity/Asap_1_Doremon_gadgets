const express = require("express");
const { GadgetsModel } = require("./model/users");
const cors = require("cors");
require("dotenv").config();
const { router } = require("./routes");
const { connected } = require("./config/dB");
const joi = require("joi");
const { validateGadget } = require("./model/users");
const jwt = require("jsonwebtoken")

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
  const validation = validateGadget(req.body);
  if (validation.error) {
    return res.status(400).json({ error: validation.error.details[0].message });
  }
  try {
    let ans = await GadgetsModel.create(req.body).then((el) => {
      res.json(el);
    });
  } catch (error) {
    res.send("Error while posting the data", error);
  }
});

// Add the DELETE route
app.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    // Find the gadget by ID and remove it
    GadgetsModel.findByIdAndDelete({ _id: id })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    res.json({ message: "Gadget deleted successfully" });
  } catch (error) {
    res.json(error);
  }
});



app.post("/auth",(req,res)=>{
  const userName = req.body.userName
  const user = {name:userName}
  const token = jwt.sign(user,process.env.token)
  res.json({token:token})
  

})


// Add an update route
app.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.body);

  try {
    GadgetsModel.findByIdAndUpdate({ _id: id }, req.body)
      .then((res) => {
        console.log("Gadget updated successfully", res);
      })
      .catch((err) => {
        console.error(err);
      });
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  connected();
  console.log(`🚀 server running on PORT: ${port}`);
});

module.exports = app;
