const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resistanceData = new Schema({
  type: String,
  name: String,
  distance: Number,
  duration: Number,
  weight: Number,
  sets: Number,
  reps: Number,
});

const Resistance = mongoose.model("Resistance", resistanceData);

module.exports = Resistance;
