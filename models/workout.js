const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseData = new Schema({
  day: Date,
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise",
    },
  ],
});

const Workout = mongoose.model("Workout", ExerciseData);

module.exports = Workout;
