const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  category: String,
  year_invented: Number,
  has_battery: Boolean,
  img: String,
  des: String,
});

const GadgetsModel = mongoose.model("doremongadget", userSchema);

module.exports = { GadgetsModel };
