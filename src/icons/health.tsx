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
        d="M16 3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v5H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h5v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-5h5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-5z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "Health";

export const Health: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
