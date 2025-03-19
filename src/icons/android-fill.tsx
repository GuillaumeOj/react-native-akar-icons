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
        d="M17.532 15.106a1.003 1.003 0 1 1 .001-2.007 1.003 1.003 0 0 1 0 2.007m-11.044 0a1.003 1.003 0 1 1 .001-2.007 1.003 1.003 0 0 1 0 2.007m11.4-6.018 2.006-3.459a.413.413 0 1 0-.721-.407l-2.027 3.5a12.24 12.24 0 0 0-5.13-1.108c-1.85 0-3.595.398-5.141 1.098l-2.027-3.5a.413.413 0 1 0-.72.407l1.995 3.458C2.696 10.947.345 14.417 0 18.523h24c-.334-4.096-2.675-7.565-6.112-9.435"
      />
    </Svg>
  );
};

IconComponent.displayName = "AndroidFill";

export const AndroidFill: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
