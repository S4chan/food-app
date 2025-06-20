import express, { Request, Response } from "express";
import multer from "multer";
import path from "path";
import {
  createFrequentFood,
  getAllFrequentFood,
  getFrequentFood,
} from "../Controllers";

const router = express.Router();

const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "assets");
  },

  filename: function (req, file, cb) {
    cb(
      null,
      req.body.name + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const images = multer({ storage: imageStorage }).array("imageUrl");

router.post("/createFrequentFood", images, createFrequentFood);
router.get("/getAllFrequentFood", getAllFrequentFood);
router.get("/getSingFrequentFood/:id", getFrequentFood);

export { router as FrequentFoodRoutes };
