import { View, Text } from "react-native";
import React from "react";
import { TabsStackScreenProps } from "../navigation/TabsNavigation";

type Props = {};

const Settings = ({ navigation, route }: TabsStackScreenProps<"Settings">) => {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};

export default Settings;
