import { Schema as _Schema, model } from "mongoose";

const Schema = _Schema;

const pcfySchema = new Schema(
  {
    personalData: {
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
    imageFile: {
      type: String,
      required: true,
    },
    laptopData: {
      laptopName: {
        type: String,
        required: true,
      },
      laptopBrand: {
        type: String,
        required: true,
      },
      laptopCpu: {
        type: String,
        required: true,
      },
      laptopCpuCores: {
        type: Number,
        required: true,
      },
      laptopCpuThreads: {
        type: Number,
        required: true,
      },
      laptopRam: {
        type: Number,
        required: true,
      },
      laptopPrice: {
        type: Number,
        required: true,
      },
      memory: {
        type: String,
        required: true,
      },
      condition: {
        type: String,
        required: true,
      },
      purchaseDate: {
        type: String,
        required: false,
      },
    },
  },
  { timestamps: true }
);

export default model("PCfy", pcfySchema);
