export interface frequentFoodParams {
  _id: string;
  name: string;
  imageUrl: [string];
  onPress?: () => void;
}

export interface fetchFrequentFood {
  data: {
    result: frequentFoodParams[];
  };
}

export interface foodCardParams {
  foodProps: frequentFoodParams;
  foodStyleProps: {
    width?: number;
    height?: number;
    radius?: number;
    resizeMode?: "contain" | "cover" | "stretch";
  };
}

export interface renderFoodItemParams {
  item: frequentFoodParams;
}
