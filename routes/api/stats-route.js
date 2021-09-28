const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    console.log("You hit the stats page on a get.");
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
