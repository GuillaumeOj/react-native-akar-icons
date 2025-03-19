import type { NamedExoticComponent } from "react";
import React, { memo } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types/icons/helpers-icon";

const IconComponent = (props: IconProps) => {
  const { color = "black", size = 24, ...otherProps } = props;
  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <Path
        fill={color}
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1m1 6a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zm0 9.5a1 1 0 1 0-2 0v.5a1 1 0 1 0 2 0z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
  );
};

IconComponent.displayName = "CircleAlertFill";

export const CircleAlertFill: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
