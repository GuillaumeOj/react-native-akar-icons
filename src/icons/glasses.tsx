import type { NamedExoticComponent } from "react";
import { memo } from "react";
import { Circle as _Circle, Path, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <_Circle
        cx="6"
        cy="14"
        r="4"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <_Circle
        cx="18"
        cy="14"
        r="4"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="m10 14 .211-.106a4 4 0 0 1 3.578 0L14 14M19 6l2.838 6.623a2 2 0 0 1 .162.788V14M5 6l-2.838 6.623A2 2 0 0 0 2 13.41V14"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "Glasses";

export const Glasses: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
