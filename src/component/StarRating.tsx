import { View, Text } from "react-native";
import React from "react";
import { starRatingStyle } from "../StylesComponent/CardStyle";
import { Ionicons } from "@expo/vector-icons";

interface ratingColorParams {
  rating: number;
}

const ratingColor = (ratingCol: number) => {
  if (ratingCol >= 4) {
    return "#1C653C";
  } else if (ratingCol >= 3) {
    return "#128145";
  } else if (ratingCol >= 2) {
    return "#E67E22";
  } else if (ratingCol >= 1) {
    return "#953925";
  } else {
    return "#CCC";
  }
};
const StarRating = ({ rating }: ratingColorParams) => {
  const bgCol = ratingColor(rating);

  return (
    <View style={[starRatingStyle.container, { backgroundColor: bgCol }]}>
      <Text style={starRatingStyle.rating}>{rating || "--"}</Text>
      <Ionicons name="star" color="#fff" size={16} />
    </View>
  );
};

export default StarRating;
