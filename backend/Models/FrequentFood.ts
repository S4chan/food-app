import mongoose, { Schema } from "mongoose";
import { frequentFoodParams } from "../TypesCheck/FrequentFoodTypes";

const FrequentFood = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageUrl: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.__V;
        delete ret.createdAt;
        delete ret.updatedAt;
      },
    },
    timestamps: true,
  }
);

const FREQUENTFOOD = mongoose.model<frequentFoodParams>(
  "frequentFood",
  FrequentFood
);

export { FREQUENTFOOD };
