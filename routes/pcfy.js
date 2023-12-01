const express = require("express");
const PCfy = require("../models/pcfyModel");
const {
  createInfo,
  getInfo,
  getInfos,
  deleteInfo,
  updateInfo,
} = require("../controllers/pcfyController");

const router = express.Router();

//GET all info
router.get("/", getInfos);

//GET a single info
router.get("/:id", getInfo);

//POST a new info
router.post("/", createInfo);

//DELETE a new info
router.delete("/:id", deleteInfo);

//UPDATE} a new info
router.patch("/:id", updateInfo);

module.exports = router;
