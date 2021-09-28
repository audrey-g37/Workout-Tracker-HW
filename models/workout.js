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
        type: {
          type: String,
          trim: true,
          required: true,
        },
        name: {
          type: String,
          trim: true,
          required: true,
        },
        distance: { type: Number, trim: true },
        duration: { type: Number, trim: true },
        weight: { type: Number, trim: true },
        sets: { type: Number, trim: true },
        reps: { type: Number, trim: true },
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
