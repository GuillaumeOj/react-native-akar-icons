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
        d="m9 15-2.968 2.968A2.362 2.362 0 0 1 2 16.298V15l1.357-6.784A4 4 0 0 1 7.279 5h9.442a4 4 0 0 1 3.922 3.216L22 15v1.297a2.362 2.362 0 0 1-4.032 1.67L15 15z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="m9 5 1 2h4l1-2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "GameController";

export const GameController: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
