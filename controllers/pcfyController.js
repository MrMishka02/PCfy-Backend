const PCfy = require("../models/pcfyModel");
const mongoose = require("mongoose");

//get all infos
const getInfos = async (req, res) => {
  const pcfys = await PCfy.find({}).sort({createdAt: -1});

  res.status(200).json(pcfys);
};

//get a single info
const getInfo = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  // if (!mongoose.Types.ObjectId.isValid({email: id})) {
  //   return res.status(404).json({ error: "No such data" });
  // }

  const pcfy = await PCfy.findOne({ email: id });

  if (!pcfy) {
    return res.status(404).json({ error: "No such info" });
  }

  res.status(200).json(pcfy);
};

//create new info
const createInfo = async (req, res) => {
  const { firstName, surName, team, position, email, phoneNumber } = req.body;
  // add doc to db
  try {
    const pcfy = await PCfy.create({
      firstName,
      surName,
      team,
      position,
      email,
      phoneNumber,
    });
    res.status(200).json(pcfy);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a info
const deleteInfo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such info" });
  }

  const pcfy = await PCfy.findOneAndDelete({ email: id });

  if (!pcfy) {
    return res.status(404).json({ error: "No such info" });
  }

  res.status(200).json(pcfy);
};

//update info
const updateInfo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such info" });
  }

  // add doc to db
  const pcfy = await PCfy.findOneAndUpdate(
    { email: id },
    {
      ...req.body,
    }
  );

  if (!pcfy) {
    return res.status(404).json({ error: "No such info" });
  }

  res.status(200).json(pcfy);
};

module.exports = {
  createInfo,
  getInfos,
  getInfo,
  deleteInfo,
  updateInfo,
};
