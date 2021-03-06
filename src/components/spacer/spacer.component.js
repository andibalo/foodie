import React from "react";
import { View } from "react-native";
import styled, { useTheme } from "styled-components";

const sizeVariants = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariants = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position, size, theme) =>
  `${positionVariants[position]} : ${theme.space[sizeVariants[size]]}`;

const SpacerView = styled.View`
  ${({ variant }) => variant};
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);

  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
