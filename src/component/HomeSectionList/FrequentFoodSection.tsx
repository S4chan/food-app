import { View, Text } from "react-native";
import React from "react";
import FrequentFood from "./FrequentFood";
import LineBreakerText from "../LineBreakerText";

type Props = {};

const FrequentFoodSection = (props: Props) => {
  return (
    <View>
      <LineBreakerText text="SERVING THE BEST ALWAYS" />
      <FrequentFood />
      <LineBreakerText text="EXPLORE RESTAURANTS" />
    </View>
  );
};

export default FrequentFoodSection;
