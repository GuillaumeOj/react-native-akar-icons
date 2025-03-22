import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
  const { color = "black", size = 24, strokeWidth = 2, ...otherProps } = props;

  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <Path
        stroke={color}
        d="M8 18V5.716a2 2 0 0 1 1.696-1.977l9-1.385A2 2 0 0 1 21 4.331V16"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Path stroke={color} d="m8 9 13-2" strokeWidth={strokeWidth} />
      <Path
        stroke={color}
        d="M8 18a3 3 0 1 1-6 0c0-1.657 1.343-2 3-2s3 .343 3 2M21 16a3 3 0 1 1-6 0c0-1.657 1.343-2 3-2s3 .343 3 2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
};

IconComponent.displayName = "Music";

export const Music: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
