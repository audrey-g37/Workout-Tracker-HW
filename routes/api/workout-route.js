const router = require("express").Router();
const db = require("../../models");

router.get("/", (req, res) => {
  db.Workout.find({})
    .then((allWorkouts) => {
      res.json(allWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/", ({ body }, res) => {
  db.Workout.create(body)
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/:id", (req, res) => {
  console.log(req.body);
  db.Workout.findOneAndUpdate(
    { _id: req.params.id },
    {
      $inc: { totalDuration: req.body.duration },
      $push: { exercises: req.body },
    },
    { new: true }
  )
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/workouts/range", async (req, res) => {
  try {
    const sumWorkoutData = await db.Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
          totalWeight: { $sum: "$exercises.weight" },
          totalSets: { $sum: "$exercises.sets" },
          totalReps: { $sum: "exercises.reps" },
          totalDistance: { $sum: "$exercises.distance" },
        },
      },
    ]);
    return res.json(sumWorkoutData);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
