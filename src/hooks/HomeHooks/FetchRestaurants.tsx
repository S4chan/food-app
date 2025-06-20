import { useCallback, useEffect, useState } from "react";
import { Platform } from "react-native";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
import {
  fetchRestaurantParams,
  restaurantParams,
} from "../../../TypesCheck.tsx/TypeParams";

const HOST = Platform.select({
  android: "http://10.0.2.2:8084/",
  ios: "http://localhost:8084/",
  default: "http://172.20.10.2:8084/",
});

export const FetchRestaurant = () => {
  const [restaurant, setRestaurant] = useState<restaurantParams[]>([]);

  const fetchRestaurants = async () => {
    const restaurantRoute = "restaurant/getRestaurants";

    try {
      const { data }: { data: fetchRestaurantParams["data"] } = await axios.get(
        HOST + restaurantRoute
      );
      const { result } = data;
      if (result) {
        const normalized = result.map((r) => {
          const raw =
            Array.isArray(r.imageUrl) && r.imageUrl.length > 0
              ? r.imageUrl[0]
              : "";
          const parts = raw.split("/assets/");
          const assetPath = parts.length > 1 ? parts[1] : "";
          const uri = assetPath ? `${HOST}assets/${assetPath}` : "";
          return { ...r, imageUrl: uri };
        });

        setRestaurant(normalized);
      }
    } catch (error) {
      console.log("Couldn't fetch restaurant", error);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchRestaurants();
    }, [])
  );

  return { restaurant };
};
