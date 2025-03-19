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
        d="M14.543 2.598a2.821 2.821 0 0 0-5.086 0L1.341 18.563C.37 20.469 1.597 23 3.883 23h16.234c2.286 0 3.511-2.53 2.542-4.437zM12 8a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1m0 8.5a1 1 0 0 1 1 1v.5a1 1 0 1 1-2 0v-.5a1 1 0 0 1 1-1"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
  );
};

IconComponent.displayName = "TriangleAlertFill";

export const TriangleAlertFill: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
