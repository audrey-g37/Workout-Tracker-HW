const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseData = new Schema({
  type: String,
  name: String,
  distance: Number,
  duration: Number,
  weight: Number,
  sets: Number,
  reps: Number,
});

const Exercise = mongoose.model("Exercise", exerciseData);

module.exports = Exercise;
