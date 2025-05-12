import type React from "react";
import type { ColorValue } from "react-native";
import type { SvgProps } from "react-native-svg";

export interface IconProps extends SvgProps {
  color?: ColorValue;
  size?: number;
  strokeWidth?: number;
}

export type IconType = React.MemoExoticComponent<
  ({ color, size, strokeWidth, ...rest }: IconProps) => React.JSX.Element
>;
