import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
  const { color = "black", size = 24, ...otherProps } = props;

  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <Path
        stroke={color}
        d="m12 11-1-7.272c0-.466.185-.913.515-1.243 1.024-1.024 2.777-.44 2.982.994L16 10l1.508-6.328a1.682 1.682 0 0 1 3.276.73L19 16"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M19 16c-.536 4-3.358 6-7.5 6S4 20 4 16"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M4 16v-4a2 2 0 1 1 4 0m4 1v-2a2 2 0 1 0-4 0v4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M13.692 17H11a2 2 0 1 1 0-4h4c2.21 0 4.5 2 3.5 5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "VictoryHand";

export const VictoryHand: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
