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
        d="M12 3v12m0-12L8 7m4-4 4 4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.876999999999999a2 2 0 0 0 1.94-1.515L22 17"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "ShareBox";

export const ShareBox: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
