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
        d="M5 9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5a7 7 0 0 1-7 7v0a7 7 0 0 1-7-7zM8 6v-.425c0-.981.384-1.96 1.326-2.238 1.525-.45 3.823-.45 5.348 0C15.616 3.615 16 4.594 16 5.575V6M18.5 7.5 22 4M5.5 7.5 2 4M6 18l-4 3M5 12H1.5M22.5 12H19M18 18l4 3M12 13v8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "Bug";

export const Bug: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
