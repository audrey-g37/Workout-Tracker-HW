const router = require("express").Router();
const workoutRoutes = require("./workout-route");

router.use("/workouts", workoutRoutes);
router.use((req, res) => {
  res.status(403).json("You dont have access to this page");
});

module.exports = router;
