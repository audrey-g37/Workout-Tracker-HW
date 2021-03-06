const router = require("express").Router();
const apiRoutes = require("./api");
const path = require("path");

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(403).json("You dont have access to this page");
});

module.exports = router;
