require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const pcfyRoutes = require("./routes/pcfy.js");

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/pcfyinfo", pcfyRoutes);

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
