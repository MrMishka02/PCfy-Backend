require("dotenv").config();
const express = require("express");

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

//listen for requests
app.listen(process.env.PORT, () => {
  console.log("Listening on port", process.env.PORT);
});
