import React from "react";

import { Text, Dimensions, FlatList, Animated } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

const { width } = Dimensions.get("window");

import {
  Card,
  Dots,
  DotsItem,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation,
  Rewards,
  RewardsTitle,
  RewardsDescription,
  RewardsButton,
  RewardsButtonText,
} from "./styles";

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
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Card>
              {item.component === "credit-card" && <></>}

              {item.component === "account" && (
                <>
                  <CardHeader>
                    <Icon name="attach-money" size={28} color="#666" />
                    <Icon name="visibility-off" size={28} color="#666" />
                  </CardHeader>

                  <CardContent>
                    <Title>Saldo disponível</Title>
                    <Description>R$ 98.745,18</Description>
                  </CardContent>

                  <CardFooter>
                    <Annotation>Boleto de R$ 349,99 pago 13:49</Annotation>
                  </CardFooter>
                </>
              )}

              {item.component === "rewards" && (
                <Rewards>
                  <Icon name="card-giftcard" size={28} color="#666" />

                  <RewardsTitle>Nubank Rewards</RewardsTitle>

                  <RewardsDescription>
                    Acumule pontos que nunca expiram e troque por passagens
                    aréreas ou serviços que você realmente usa
                  </RewardsDescription>

                  <RewardsButton>
                    <RewardsButtonText>ATIVE SEU REWARDS</RewardsButtonText>
                  </RewardsButton>
                </Rewards>
              )}
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
