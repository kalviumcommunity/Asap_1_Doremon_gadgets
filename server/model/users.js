const mongoose = require("mongoose");
const Joi = require("joi");

const gadgetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  des: {
    type: String,
    required: true,
  },
});

const validateGadget = (gadget) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    category: Joi.string().required(),
    img: Joi.string().required(),
    des: Joi.string().required(),
  });

  return schema.validate(gadget);
};

const GadgetsModel = mongoose.model("doremongadget", gadgetSchema);

module.exports = { GadgetsModel, validateGadget };
