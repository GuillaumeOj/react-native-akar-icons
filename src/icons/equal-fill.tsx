import type { NamedExoticComponent } from "react";
import { memo } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <Path
        fill={color}
        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m6 2a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m1-5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
  );
};

IconComponent.displayName = "EqualFill";

export const EqualFill: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
