import mongoose, { Schema } from "mongoose";

import { restaurantProps } from "../TypesCheck/RestaurantTypes";

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: [String],
      required: true,
      default: [],
    },
    foodType: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
    },
    ratingCount: {
      type: Number,
    },
    ServiceCharge: {
      type: Number,
    },
    coords: {
      latitude: { type: Number },
      longitude: { type: Number },
      address: { type: String },
    },
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

const RESTAURANTS = mongoose.model<restaurantProps>(
  "restaurants",
  restaurantSchema
);

export { RESTAURANTS };
