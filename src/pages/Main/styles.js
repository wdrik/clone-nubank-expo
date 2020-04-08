import { Animated } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #83259f;
  justify-content: center;
`;

export const Content = styled.View`
  max-height: 400px;
  z-index: 5;
`;

export const Card = styled(Animated.View)`
  background: transparent;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;
