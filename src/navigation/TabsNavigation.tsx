import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import type { CompositeScreenProps } from "@react-navigation/native";
import { RootStackScreenProps } from "./RootNavigation.js";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Settings from "../screens/Settings";
import CustomTabBar from "./TabsComponents/CustomTabBar";

export type TabsStackParams = {
  Home: undefined;
  Cart: undefined;
  Profile: undefined;
  Settings: undefined;
};

const TabsStack = createBottomTabNavigator<TabsStackParams>();

export type TabsStackScreenProps<T extends keyof TabsStackParams> =
  CompositeScreenProps<
    BottomTabScreenProps<TabsStackParams, T>,
    RootStackScreenProps<"TabsStack">
  >;

const TabsNavigatior = () => {
  return (
    <TabsStack.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ tabBarShowLabel: false, tabBarHideOnKeyboard: true }}
    >
      <TabsStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <TabsStack.Screen
        name="Cart"
        component={CartScreen}
        options={{ headerShown: false }}
      />
      <TabsStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <TabsStack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
    </TabsStack.Navigator>
  );
};

export default TabsNavigatior;
