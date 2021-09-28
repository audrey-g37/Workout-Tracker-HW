const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutData = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: String,
        name: String,
        distance: Number,
        duration: Number,
        weight: Number,
        sets: Number,
        reps: Number,
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

WorkoutData.virtual("totalDuration").get(function () {
  const duration = this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
  return duration;
});

const Workout = mongoose.model("Workout", WorkoutData);

module.exports = Workout;
