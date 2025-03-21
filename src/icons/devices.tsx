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
        d="M10 15H4V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2M2 18h12"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M14 9.2c0-.663.597-1.2 1.333-1.2h5.334C21.403 8 22 8.537 22 9.2v9.6c0 .663-.597 1.2-1.333 1.2h-5.334C14.597 20 14 19.463 14 18.8zM18 17h.01"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "Devices";

export const Devices: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
