const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: String
    
});

const GadgetsModel = mongoose.model("doremongadget", userSchema);

module.exports = {GadgetsModel};
