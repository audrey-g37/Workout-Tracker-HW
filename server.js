const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3001;

const db = require("./models");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.Workout.create({ name: "Workout" })
  .then((data) => {
    console.log(data);
  })
  .catch(({ message }) => {
    console.log(message);
  });

db.Exercise.create({ name: "Exercise" })
  .then((data) => {
    console.log(data);
  })
  .catch(({ message }) => {
    console.log(message);
  });

app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/exercise.html"));
});

//NEED TO WORK HERE...

app.post("/exercise", ({ body }, res) => {
  db.Exercise.create(body)
    .then(({ _id }) =>
      db.Workout.findOneAndUpdate(
        {},
        { $push: { exercises: _id } },
        { new: true }
      )
    )
    .catch((err) => {
      console.log(err);
    });
});

app.post("/api/workouts", ({ body }, res) => {
  db.Exercise.create(body)
    .then(({ _id }) =>
      db.Workout.findOneAndUpdate(
        {},
        { $push: { exercises: _id } },
        { new: true }
      )
    )
    .catch((err) => {
      console.log(err);
    });
});

app.put("/api/workouts", ({ body }, res) => {
  db.Exercise.create(body)
    .then(({ _id }) =>
      db.Workout.findOneAndUpdate(
        {},
        { $push: { exercises: _id } },
        { new: true }
      )
    )
    .catch((err) => {
      console.log(err);
    });
});

// THROUGH HERE

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});
