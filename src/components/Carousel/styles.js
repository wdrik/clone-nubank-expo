import { Animated, Dimensions } from "react-native";
import styled from "styled-components/native";

const { width } = Dimensions.get("window");

export const Dots = styled.View`
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

export const Card = styled.View`
  flex: 1;
  width: ${width - 40}px;
  height: 360px;
  background: #fff;
  margin: 0 20px;
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 10px;
`;
