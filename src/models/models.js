const mongoose = require("mongoose");
const { Schema } = mongoose;

const form = new Schema(
  {
    name: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const formSubmit = mongoose.model("formSubmit", form);
module.exports = formSubmit;
