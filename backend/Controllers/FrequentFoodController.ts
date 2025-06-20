import { Request, Response } from "express";
import { frequentFoodParams } from "../TypesCheck/FrequentFoodTypes";
import { FREQUENTFOOD } from "../Models/FrequentFood";

export const createFrequentFood = async (req: Request, res: Response) => {
  const { name } = <frequentFoodParams>req.body;

  const files = req.files as [Express.Multer.File];

  const path = "http://172.20.10.3:8084/assets/";
  const imageUrl = files.map(
    (file: Express.Multer.File) => path + file.filename
  );

  const frequentFoods = new FREQUENTFOOD({
    name,
    imageUrl,
  });

  try {
    await frequentFoods.save();
    console.log("Frequent food", frequentFoods);
    res.status(200).json("Frequent Food created successfully");
  } catch (error) {
    res.status(500).json(`Failed to create Frequent food ${error}`);
  }
};

export const getFrequentFood = async (req: Request, res: Response) => {
  try {
    const result = await FREQUENTFOOD.findById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(`Failed to fetch Frequent food ${error}`);
  }
};

export const getAllFrequentFood = async (req: Request, res: Response) => {
  try {
    const result = await FREQUENTFOOD.find().limit(30);
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json(`Failed to fetch Frequent food ${error}`);
  }
};
