import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { NavigatorScreenParams } from "@react-navigation/native";
import { TabsStackParams } from "./TabsNavigation";
import BottomTabsAnimation from "./BottomTabsAnimation";

export type RootStackParmas = {
  TabsStack: NavigatorScreenParams<TabsStackParams>;
};

const RootStack = createNativeStackNavigator<RootStackParmas>();

export type RootStackScreenProps<T extends keyof RootStackParmas> =
  NativeStackScreenProps<RootStackParmas, T>;

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="TabsStack"
        component={BottomTabsAnimation}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
