import React from "react";
import { SharedContextProvider } from "../context/SharedContext";
import TabsNavigatior from "./TabsNavigation";

type Props = {};

const BottomTabsAnimation = (props: Props) => {
  return (
    <SharedContextProvider>
      <TabsNavigatior />
    </SharedContextProvider>
  );
};

export default BottomTabsAnimation;
