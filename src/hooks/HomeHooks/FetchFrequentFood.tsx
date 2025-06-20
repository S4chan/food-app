import { Platform } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import {
  fetchFrequentFood,
  frequentFoodParams,
} from "../../../TypesCheck.tsx/HomeProp";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";

const HOST = Platform.select({
  android: "http://10.0.2.2:8084/",
  ios: "http://localhost:8084/",
  default: "http://172.20.10.2:8084/",
});

export const FetchAllFrequentFood = () => {
  const [food, setFood] = useState<frequentFoodParams[]>([]);

  const fetchFood = async () => {
    const foodRoute = "frequent/getAllFrequentFood";

    try {
      const response: fetchFrequentFood = await axios.get(HOST + foodRoute);
      const { result } = response.data;
      if (result)
        setFood(
          result.map((item) => {
            const rawUrl = item.imageUrl[0] || "";
            const filename = rawUrl.substring(rawUrl.lastIndexOf("/assets/"));
            const fixedUrl = HOST + filename.replace(/^\//, "");

            return {
              _id: item._id,
              name: item.name,
              imageUrl: [fixedUrl] as [string],
              onPress: () => console.log("點了", item._id),
            };
          })
        );
      // console.log("[FetchFood]", result);
    } catch (error) {
      console.log("Couldn't fetch frequent food");
    }
  };

  useEffect(() => {
    fetchFood();
  }, []);

  useFocusEffect(useCallback(() => {}, []));

  return { food };
};
