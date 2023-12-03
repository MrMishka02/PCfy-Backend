import { Router } from "express";
import {
  createInfo,
  getInfo,
  getInfos,
  deleteInfo,
  updateInfo,
} from "../controllers/pcfyController.js";

const router = Router();

//GET all info
router.get("/", getInfos);

//GET a single info
router.get("/:email", getInfo);

//POST a new info
router.post("/", createInfo);

//DELETE a new info
router.delete("/:email", deleteInfo);

//UPDATE} a new info
router.patch("/:email", updateInfo);

export default router;
