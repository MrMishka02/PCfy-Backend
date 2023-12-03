import { Schema as _Schema, model } from "mongoose";

const Schema = _Schema;

const pcfySchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    surName: {
      type: String,
      required: true,
    },
    team: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model("PCfy", pcfySchema);
