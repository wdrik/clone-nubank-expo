import React from "react";

import { Text, Dimensions, FlatList, Animated } from "react-native";

const { width } = Dimensions.get("window");

import { Card, Dots, DotsItem } from "./styles";

const data = [
  {
    id: 1,
    component: "credit-card",
  },
  {
    id: 2,
    component: "account",
  },
  {
    id: 3,
    component: "rewards",
  },
];

export default function Carousel() {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);

  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        decelerationRate={"fast"}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Card>
              {item.component === "credit-card" && <Text>credit-card</Text>}
              {item.component === "account" && <Text>account</Text>}
              {item.component === "rewards" && <Text>rewards</Text>}
            </Card>
          );
        }}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { x: scrollX } } },
        ])}
      />

      <Dots>
        {data.map((_, i) => {
          let opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          return (
            <DotsItem
              key={i}
              style={{
                opacity,
              }}
            />
          );
        })}
      </Dots>
    </>
  );
}
