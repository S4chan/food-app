import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { gotoTopStyles } from "../../StylesComponent/CardStyle";

interface goToTopParams {
  onPress: () => void;
}

const GoToTopButton = ({ onPress }: goToTopParams) => {
  return (
    <TouchableOpacity onPress={onPress} style={gotoTopStyles.container}>
      <Ionicons name="arrow-up-circle-outline" color="#FFF" size={12} />
      <Text style={gotoTopStyles.backToTop}>Back To Top</Text>
    </TouchableOpacity>
  );
};

export default GoToTopButton;
