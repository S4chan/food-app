import { View, Text, FlatList } from "react-native";
import React from "react";
import { restaurantStyle } from "../../StylesComponent/CardStyle";
import { renderRestaurantParams } from "../../../TypesCheck.tsx/TypeParams";
import RestaurantCard from "../RestaurantCard";
import { FetchRestaurant } from "../../hooks/HomeHooks/FetchRestaurants";

const RestaurantSection = () => {
  const { restaurant } = FetchRestaurant();
  const renderRestaurants = ({ item }: renderRestaurantParams) => (
    <RestaurantCard item={item} />
  );

  return (
    <View>
      <Text style={restaurantStyle.restaurantAddress}>
        300 Restaurants delivering to you
      </Text>
      <Text style={restaurantStyle.restaurantAddress}>FEATURED</Text>
      <FlatList
        data={restaurant}
        renderItem={renderRestaurants}
        keyExtractor={(item) => item._id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RestaurantSection;
