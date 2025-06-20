import { View, Text } from "react-native";
import React from "react";
import { TabsStackScreenProps } from "../navigation/TabsNavigation";

type Props = {};

const ProfileScreen = ({
  navigation,
  route,
}: TabsStackScreenProps<"Profile">) => {
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;
