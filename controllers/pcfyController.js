import PCfy from "../models/pcfyModel.js";

//get all infos
export const getInfos = async (req, res) => {
  const pcfys = await PCfy.find({})
    .sort({ createdAt: -1 })
    .select(["-__v", "-createdAt", "-updatedAt", "-_id"]);

  res.status(200).json(pcfys);
};

//get a single info
export const getInfo = async (req, res) => {
  const { email } = req.params;
  try {
    const pcfy = await PCfy.findOne({ email });

    if (!pcfy) {
      return res.status(404).json({ error: "No such info" });
    }

    res.status(200).json(pcfy);
  } catch {
    (error) => {
      res.status(500).json(error);
    };
  }
};

//create new info
export const createInfo = async (req, res) => {
  const { firstName, surName, team, position, email, phoneNumber } = req.body;

  // add doc to db
  try {
    const existingEmail = await PCfy.findOne({ email });
    if (existingEmail) {
      return res
        .status(400)
        .json({ error: "ასეთი მომხმარებელი უკვე არსებობს" });
    }
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
export const deleteInfo = async (req, res) => {
  const { email } = req.params;

  const pcfy = await PCfy.findOneAndDelete({ email });

  if (!pcfy) {
    return res.status(404).json({ error: "No such info" });
  }

  res.status(200).json(pcfy);
};

//update info
export const updateInfo = async (req, res) => {
  const { email } = req.params;

  // add doc to db
  const pcfy = await PCfy.findOneAndUpdate(
    { email },
    {
      ...req.body,
    }
  );

  if (!pcfy) {
    return res.status(404).json({ error: "No such info" });
  }

  res.status(200).json(pcfy);
};
