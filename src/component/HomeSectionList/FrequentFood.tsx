import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import FoodCard from "./FoodCard";
import { FetchAllFrequentFood } from "../../hooks/HomeHooks/FetchFrequentFood";
import { renderFoodItemParams } from "../../../TypesCheck.tsx/HomeProp";

type Props = {};

const FrequentFood = (props: Props) => {
  const { food } = FetchAllFrequentFood();

  const rederFoodItem = ({ item }: renderFoodItemParams) => (
    <FoodCard
      foodProps={{
        _id: item._id,
        name: item.name,
        imageUrl: item.imageUrl,
      }}
      foodStyleProps={{
        width: 70,
        height: 70,
        radius: 99,
        resizeMode: "contain",
      }}
    />
  );

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <FlatList
        data={food}
        renderItem={rederFoodItem}
        numColumns={Math.ceil(food?.length / 2)}
        key={Math.ceil(food?.length / 2)}
        pagingEnabled={false}
        keyExtractor={(item) => item?._id.toString()}
      />
    </ScrollView>
  );
};

export default FrequentFood;
