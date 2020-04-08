import { StyleSheet, Animated, Dimensions } from "react-native";

import styled from "styled-components/native";

const { width } = Dimensions.get("window");

export const Card = styled.View`
  flex: 1;
  width: ${width - 40}px;
  height: 370px;
  background: #fff;
  margin: 0 20px;
  border-radius: 5px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const CardContent = styled.View`
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

export const CardFooter = styled.View`
  height: 100px;
  padding: 20px;
  background: #f7f7f7;
  justify-content: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const Annotation = styled.Text`
  font-size: 13px;
  color: #444;
  font-weight: 300;
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

export const Dots = styled.View`
  justify-content: center;
  flex-direction: row;
  margin-top: 10px;
`;

export const DotsItem = styled(Animated.View)`
  height: 8px;
  width: 8px;
  background: #fff;
  margin: 5px;
  border-radius: 4px;
`;
