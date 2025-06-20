import { View, Text, Pressable } from "react-native";
import React from "react";
import { Icons } from "./icons";
import { Colors } from "../../StylesComponent/Constant";

interface TabsCardParams {
  routeName: string;
  label: string;
  isFocused: boolean;
  onPress: () => void;
  onLongPress: () => void;
}

const TabsCard = ({
  routeName,
  label,
  isFocused,
  onPress,
  onLongPress,
}: TabsCardParams) => {
  return (
    <Pressable
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        marginTop: 3,
        paddingTop: 10,
        backgroundColor: "#fff",
      }}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      {Icons[routeName]({
        color: isFocused ? Colors.red : "grey",
      })}
      <Text
        style={{
          color: isFocused ? "green" : "grey",
          marginBottom: 8,
          fontSize: 15,
          fontWeight: "bold",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default TabsCard;
