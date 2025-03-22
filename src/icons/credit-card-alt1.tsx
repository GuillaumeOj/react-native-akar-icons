import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Path, Rect, Svg } from "react-native-svg";
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
      <Rect
        width="20"
        height="16"
        x="2"
        y="4"
        stroke={color}
        rx="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Path
        stroke={color}
        d="M6 8h2v2H6z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
};

IconComponent.displayName = "CreditCardAlt1";

export const CreditCardAlt1: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
