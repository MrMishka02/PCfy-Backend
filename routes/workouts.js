const express = require("express");
const Workout = require("../models/workoutModel");
const { createWorkout } = require("../controllers/workoutController");

const router = express.Router();

//GET all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "GET all workouts" });
});

//GET a single workouts
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single workout" });
});

//POST a new workout
router.post("/", createWorkout);

//DELETE a new workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a workout" });
});

//UPDATE} a new workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a new workout" });
});

module.exports = router;
