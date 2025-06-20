import { View, Text, Platform } from "react-native";
import React from "react";
import { TabsStackScreenProps } from "../navigation/TabsNavigation";
import { headerStyl } from "../StylesComponent/HeadersStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import HeadersComponent from "../component/HomeHeader/HeadersComponent";
import SectionListContent from "../component/HomeSectionList/SectionListContent";
import { useSharedContext } from "../context/SharedContext";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

type Props = {};

const HomeScreen = ({ navigation, route }: TabsStackScreenProps<"Home">) => {
  const { globalScrollY } = useSharedContext();
  const scrollingUpAnim = useAnimatedStyle(() => {
    const transY = interpolate(
      globalScrollY.value,
      [0, 50],
      [0, -50],
      Extrapolation.CLAMP
    );
    return {
      transform: [{ translateY: transY }],
    };
  });

  return (
    <View style={headerStyl.homeContainer}>
      <SafeAreaView
        style={{ paddingTop: Platform.OS === "android" ? 40 : 0 }}
      />
      <Animated.View style={[scrollingUpAnim]}>
        <View style={headerStyl.homeHeader}>
          <HeadersComponent />
        </View>
      </Animated.View>
      <Animated.View style={[scrollingUpAnim]}>
        <SectionListContent />
      </Animated.View>
    </View>
  );
};

export default HomeScreen;
