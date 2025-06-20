import { Request, Response } from "express";
import { restaurantProps } from "../TypesCheck/RestaurantTypes";
import { RESTAURANTS } from "../Models/RestaurantModel";

export const createRestaurant = async (req: Request, res: Response) => {
  const {
    name,
    description,
    foodType,
    time,
    serviceCharge,
    rating,
    ratingCount,
    coords,
  } = <restaurantProps>req.body;

  const files = req.files as [Express.Multer.File];

  const path = "http://172.20.10.3:8084/assets/";
  const imageUrl = files.map(
    (file: Express.Multer.File) => path + file.filename
  );

  const restaurants = new RESTAURANTS({
    name,
    imageUrl,
    description,
    foodType,
    time,
    serviceCharge,
    rating,
    ratingCount,
    coords,
  });

  try {
    await restaurants.save();
    console.log("restaurants", restaurants);
    res.status(200).json("Restaurant created successfully");
  } catch (error) {
    res.status(500).json(`Failed to create Restaurant ${error}`);
  }
};

export const getAllRestaurant = async (req: Request, res: Response) => {
  try {
    const result = await RESTAURANTS.find().limit(30);
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json(`Failed to fetch Restaurant ${error}`);
  }
};
