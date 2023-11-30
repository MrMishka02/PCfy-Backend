require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const workoutRoutes = require("./routes/workouts.js");

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", workoutRoutes);

//Connect to MongoDB & listen for requests
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(process.env.PORT, () => {
  console.log("Listening on port", process.env.PORT);
});
