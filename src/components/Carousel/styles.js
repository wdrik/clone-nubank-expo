import { StyleSheet, Animated, Dimensions } from "react-native";

import styled from "styled-components/native";

const { width } = Dimensions.get("window");

export const Card = styled.View`
  flex: 1;
  width: ${width - 40}px;
  height: 360px;
  background: #fff;
  margin: 0 20px;
  border-radius: 5px;
`;

export const AccountHeader = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;

export const AccountHeaderText = styled.Text`
  margin-right: auto;
  margin-left: 6px;
  color: #666;
`;

export const AccountContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #999;
`;

export const Description = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #333;
`;

export const AccountFooter = styled.View`
  height: 100px;
  padding: 20px;
  background: #f7f7f7;
  flex-direction: row;
  align-items: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const AccountFooterText = styled.Text`
  font-size: 13px;
  font-weight: 300;
  color: #666;
  margin-left: 6px;
  margin-right: auto;
`;

export const Rewards = styled.View`
  align-items: center;
  padding: 30px;
`;

export const RewardsTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin: 60px 0 20px;
  color: #333;
`;

export const RewardsDescription = styled.Text`
  font-size: 14px;
  color: #333;
  text-align: center;
`;

export const RewardsButton = styled.TouchableOpacity`
  width: 100%;
  margin-top: 60px;
  border: ${StyleSheet.hairlineWidth}px solid #83259f;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  height: 60px;
`;

export const RewardsButtonText = styled.Text`
  color: #83259f;
  font-size: 15px;
  font-weight: 500;
`;

export const CreditCardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  margin-bottom: 40px;
`;

export const CreditCardHeaderText = styled.Text`
  color: #666;
  margin-left: 6px;
`;

export const CreditCardContent = styled.View`
  flex: 1;
  padding: 0 20px;
`;

export const CurrentInvoice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #00bccc;
`;

export const AvailableLimitValue = styled.Text`
  font-size: 38px;
  color: #00bccc;
  font-weight: 300;
`;

export const AvailableLimitValueBold = styled.Text`
  font-weight: bold;
`;

export const AvailableLimit = styled.Text`
  color: #333;
  font-weight: 300;
  font-size: 16px;
`;

export const AvailableLimitGreen = styled.Text`
  color: #a5da1a;
  font-weight: bold;
`;

export const CreditCardFooter = styled.View`
  height: 100px;
  padding: 20px;
  background: #f7f7f7;
  flex-direction: row;
  align-items: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const CreditCardFooterText = styled.Text`
  flex: 1;
  margin-left: 6px;
  font-size: 13px;
  color: #666;
`;

export const CreditCardLimitBar = styled.View`
  width: 10px;
  height: 220px;
  background: #00bccc;
  position: absolute;
  right: 20px;
  top: 20px;
  border-radius: 10px;
  border-top-width: 160px;
  border-top-color: #fcab01;
  border-bottom-width: 60px;
  border-bottom-color: #a5da1a;
`;

export const Dots = styled(Animated.View)`
  justify-content: center;
  flex-direction: row;
`;

export const DotsItem = styled(Animated.View)`
  height: 8px;
  width: 8px;
  background: #fff;
  margin: 5px;
  border-radius: 4px;
`;
