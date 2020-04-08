import React from "react";

import { Dimensions, FlatList, Animated } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const { width } = Dimensions.get("window");

import {
  Card,
  Dots,
  DotsItem,
  CreditCardHeader,
  CreditCardHeaderText,
  CreditCardContent,
  CurrentInvoice,
  AvailableLimitValue,
  AvailableLimitValueBold,
  AvailableLimit,
  AvailableLimitGreen,
  CreditCardFooter,
  CreditCardFooterText,
  CreditCardLimitBar,
  AccountHeader,
  AccountHeaderText,
  AccountContent,
  Title,
  Description,
  AccountFooter,
  AccountFooterText,
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
              {item.component === "credit-card" && (
                <>
                  <CreditCardHeader>
                    <Icon name="credit-card" size={28} color="#666" />

                    <CreditCardHeaderText>
                      Cartão de crédito
                    </CreditCardHeaderText>
                  </CreditCardHeader>

                  <CreditCardContent>
                    <CurrentInvoice>FATURA ATUAL</CurrentInvoice>
                    <AvailableLimitValue>
                      R$
                      <AvailableLimitValueBold> 489</AvailableLimitValueBold>
                      ,77
                    </AvailableLimitValue>

                    <AvailableLimit>
                      Limite disponível
                      <AvailableLimitGreen> R$ 392,05</AvailableLimitGreen>
                    </AvailableLimit>
                  </CreditCardContent>

                  <CreditCardFooter>
                    <Icon name="trending-up" size={28} color="#666" />

                    <CreditCardFooterText>
                      Compra mais recente em Htm*Hotmart Rocketseat no valor de
                      R$1980,00 30 mar
                    </CreditCardFooterText>

                    <Icon name="chevron-right" size={18} color="#ccc" />
                  </CreditCardFooter>

                  <CreditCardLimitBar />
                </>
              )}

              {item.component === "account" && (
                <>
                  <AccountHeader>
                    <Icon name="local-atm" size={28} color="#666" />
                    <AccountHeaderText>Conta</AccountHeaderText>
                    <Icon name="visibility-off" size={28} color="#666" />
                  </AccountHeader>

                  <AccountContent>
                    <Title>Saldo disponível</Title>
                    <Description>R$ 98.745,18</Description>
                  </AccountContent>

                  <AccountFooter>
                    <FontAwesome5 name="barcode" size={28} color="#666" />

                    <AccountFooterText>
                      Boleto de R$ 349,99 pago 13:49
                    </AccountFooterText>

                    <Icon name="chevron-right" size={18} color="#ccc" />
                  </AccountFooter>
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
