import express from "express";
import multer from "multer";
import path from "path";
import { createRestaurant, getAllRestaurant } from "../Controllers";

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

router.post("/createRestaurant", images, createRestaurant);
router.get("/getRestaurants", getAllRestaurant);

export { router as RestaurantRoute };
