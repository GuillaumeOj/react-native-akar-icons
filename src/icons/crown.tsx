import type { NamedExoticComponent } from "react";
import { memo } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <Path
        stroke={color}
        d="m2 8 1.304 1.043a4 4 0 0 0 5.995-1.181L12 3l2.701 4.862a4 4 0 0 0 5.996 1.18L22 8l-1.754 8.77a2.56 2.56 0 0 1-1.367 1.79v0a15.38 15.38 0 0 1-13.758 0v0a2.56 2.56 0 0 1-1.367-1.79z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M8 15c2.596 1.333 5.404 1.333 8 0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "Crown";

export const Crown: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
