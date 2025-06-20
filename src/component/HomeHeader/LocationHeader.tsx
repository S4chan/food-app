import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { headerStyl } from "../../StylesComponent/HeadersStyle";
import { Ionicons } from "@expo/vector-icons";
import { Colors, Sizes } from "../../StylesComponent/Constant";
import { useSharedContext } from "../../context/SharedContext";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

type Props = {};

const LocationHeader = (props: Props) => {
  const { globalScrollY } = useSharedContext();
  const animOpacity = useAnimatedStyle(() => {
    const opacity = interpolate(globalScrollY.value, [0, 70], [1, 0]);

    return {
      opacity,
    };
  });

  return (
    <Animated.View>
      <SafeAreaView />
      <View style={headerStyl.locationContainer}>
        <View style={headerStyl.locationContainer}>
          <Ionicons name="location" size={Sizes.xxl} color={Colors.red} />
          <View>
            <TouchableOpacity style={headerStyl.userNameContainer}>
              <Text style={headerStyl.userName}>riyo ayra</Text>
              <Ionicons
                name="chevron-down"
                color={Colors.black}
                size={Sizes.s}
              />
            </TouchableOpacity>
            <Text style={headerStyl.userLocationText}>
              North artic region India
            </Text>
          </View>
        </View>
        <View style={headerStyl.menuBarContainer}>
          <TouchableOpacity style={headerStyl.userNameContainer}>
            <Ionicons name="menu" color={Colors.black} size={Sizes.xxl} />
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

export default LocationHeader;
