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
        d="M4.511 13.542c-.681-.852-.681-2.232 0-3.084l6.256-7.82c.68-.85 1.785-.85 2.467 0l6.255 7.82c.681.852.681 2.232 0 3.084l-6.256 7.82c-.68.85-1.785.85-2.466 0z"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
};

IconComponent.displayName = "Diamond";

export const Diamond: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
