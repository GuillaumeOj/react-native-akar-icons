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
        d="M12 20v-8m0 0V4m0 8h8m-8 0H4"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "Plus";

export const Plus: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
