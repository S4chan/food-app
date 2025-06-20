import { View, useWindowDimensions } from "react-native";
import { useEffect, useState } from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import TabsCard from "./TabsCard";
import { useSharedContext } from "../../context/SharedContext";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const { scrollY } = useSharedContext();
  const { width: screenWidth } = useWindowDimensions();
  const tabCount = state.routes.length;
  const indicatorWidth = screenWidth / tabCount;

  // const onTabBarLayout = (e: LayoutChangeEvent) => {
  //   setDimesions({
  //     height: e.nativeEvent.layout.height,
  //     width: e.nativeEvent.layout.width,
  //   });
  // };

  const tabPositionX = useSharedValue(0);

  useEffect(() => {
    tabPositionX.value = withTiming(indicatorWidth * state.index, {
      duration: 300,
    });
  }, [state.index, indicatorWidth]);

  // const animatedStyle = useAnimatedStyle(() => {
  //   return {
  //     transform: [{ translateX: tabPositionX.value }],
  //   };
  // });

  const indicatorStyle = useAnimatedStyle(() => ({
    width: indicatorWidth,
    transform: [{ translateX: tabPositionX.value }],
  }));

  // const transYanim = useAnimatedStyle(() => {
  //   return {
  //     transform: [
  //       {
  //         translateY:
  //           scrollY.value === 1
  //             ? withTiming(100, { duration: 300 })
  //             : withTiming(0, { duration: 300 }),
  //       },
  //     ],
  //   };
  // });

  const containerStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY:
          scrollY.value === 1
            ? withTiming(100, { duration: 300 })
            : withTiming(0, { duration: 300 }),
      },
    ],
  }));

  return (
    <>
      <Animated.View
        style={[
          containerStyle,
          {
            width: "100%",
            height: 70,
            position: "absolute",
            bottom: 0,
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 0.1,
            elevation: 5,
            shadowRadius: 11,
            shadowColor: "#000",
            zIndex: 5,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          },
        ]}
      >
        <Animated.View
          style={[
            {
              position: "absolute",
              backgroundColor: "green",
              top: 0,
              // left: 22,
              height: 5,
              // width: indicatorWidth * 2,
            },
            indicatorStyle,
          ]}
        />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            // justifyContent: "space-between",
            // alignItems: "center",
          }}
        >
          {state.routes.map((route, idx) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === idx;

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });
              if (!isFocused && !event?.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: "tabLongPress",
                target: route.key,
              });
            };

            return (
              <TabsCard
                key={route.name}
                onPress={onPress}
                onLongPress={onLongPress}
                isFocused={isFocused}
                routeName={route.name}
                label={label.toString()}
              />
            );
          })}
        </View>
      </Animated.View>
    </>
  );
};

export default CustomTabBar;
