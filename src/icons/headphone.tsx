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
        d="M2 13.565C2 11.512 4 11 6 11v9a4 4 0 0 1-4-4zM22 13.565C22 11.512 20 11 18 11v9a4 4 0 0 0 4-4zM6 20V10a6 6 0 1 1 12 0v10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
};

IconComponent.displayName = "Headphone";

export const Headphone: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
