import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  SectionList,
  ViewToken,
} from "react-native";
import { useRef, useState } from "react";
import FrequentFoodSection from "./FrequentFoodSection";
import RestaurantSection from "./RestaurantSection";
import { secStyl } from "../../StylesComponent/SectionListStyles";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import MenuFilterTab from "./MenuFilterTab";
import { filterTabList } from "../../data/FilterTabList";
import { useSharedContext } from "../../context/SharedContext";
import { withTiming } from "react-native-reanimated";
import GoToTopButton from "../HomeHeader/GoToTopButton";
import { gotoTopStyles } from "../../StylesComponent/CardStyle";

const sectionListData = [
  {
    title: "Frequent Food",
    data: [{}],
    renderItem: () => <FrequentFoodSection />,
  },
  {
    title: "Restaurant",
    data: [{}],
    renderItem: () => <RestaurantSection />,
  },
];

const SectionListContent = () => {
  const { scrollY, globalScrollY, scrollToTop } = useSharedContext();
  const sectionListRef = useRef<SectionList>(null);
  const prevScrollY = useRef(0);
  const scrollToTopPreviousValue = useRef<number>(0);
  const [isReataurantSection, setIsReataurantSection] = useState(false);
  const [nearEnd, setNearEnd] = useState(false);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentScrollY = event?.nativeEvent?.contentOffset?.y;
    const isScrollingDown = currentScrollY > prevScrollY.current;

    scrollY.value = isScrollingDown
      ? withTiming(1, { duration: 300 })
      : withTiming(0, { duration: 300 });
    prevScrollY.current = currentScrollY;
    globalScrollY.value = currentScrollY;

    const contentHeight = event.nativeEvent.contentSize.height;
    const layoutHt = event.nativeEvent?.layoutMeasurement?.height;
    const scrollOffset = event?.nativeEvent?.contentOffset?.y;

    setNearEnd(scrollOffset + layoutHt >= contentHeight - 500);
  };

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 80,
  };

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    const isRestaurantSection = viewableItems.some(
      (item) => item?.section?.title === "Restaurant" && item?.isViewable
    );
    setIsReataurantSection(isReataurantSection);
  };

  const handleScrollToTop = async () => {
    goToTop();
    sectionListRef.current?.scrollToLocation({
      sectionIndex: 0,
      itemIndex: 0,
      animated: true,
      viewPosition: 0,
    });
  };

  const animGoToTop = useAnimatedStyle(() => {
    const isScrollingUp =
      globalScrollY?.value < scrollToTopPreviousValue.current &&
      globalScrollY.value > 170;

    const opacity = withTiming(
      isScrollingUp && (isReataurantSection || nearEnd) ? 1 : 0,
      { duration: 300 }
    );
    const transY = withTiming(
      isScrollingUp && (isReataurantSection || nearEnd) ? 1 : 10,
      { duration: 300 }
    );

    scrollToTopPreviousValue.current = globalScrollY.value;
    return {
      opacity,
      transform: [{ translateY: transY }],
    };
  });

  const goToTop = async () => {
    scrollY.value = withTiming(0, { duration: 300 });
    sectionListRef.current?.scrollToLocation({
      sectionIndex: 0,
      itemIndex: 0,
      animated: true,
      viewPosition: 0,
    });
  };

  return (
    <>
      <Animated.View
        style={[animGoToTop, gotoTopStyles.gotoTopButtonContainer]}
      >
        <GoToTopButton onPress={handleScrollToTop} />
      </Animated.View>
      <SectionList
        ref={sectionListRef}
        contentContainerStyle={secStyl.sectionListContainer}
        sections={sectionListData}
        keyExtractor={(item, idx) => idx.toString()}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        renderSectionHeader={({ section }) => {
          if (section.title !== "Restaurant") {
            return null;
          }
          return (
            <Animated.View
              style={[
                isReataurantSection || nearEnd ? secStyl.sickyHeaderBg : null,
              ]}
            >
              <MenuFilterTab filterLabel="Sort" tabList={filterTabList} />
            </Animated.View>
          );
        }}
        bounces={false}
        overScrollMode="always"
        nestedScrollEnabled={false}
        stickySectionHeadersEnabled={true}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
    </>
  );
};

export default SectionListContent;
