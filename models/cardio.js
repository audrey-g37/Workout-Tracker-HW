const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardioData = new Schema({
  type: String,
  name: String,
  duration: Number,
  distance: Number,
});

const addCardio = mongoose.model("addCardio", cardioData);

module.exports = addCardio;
