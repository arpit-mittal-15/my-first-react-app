const mongoose = require("mongoose");

const detailSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  favLanguage: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
}, 
{timestamps: true}
);

const Detail = mongoose.model("detail", detailSchema);

module.exports = Detail;