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
        d="M4 4.222v15.556C4 21.005 5.023 22 6.286 22h11.428C18.977 22 20 21.005 20 19.778V8.444a2 2 0 0 0-2-2H6.286C5.023 6.444 4 5.45 4 4.222m0 0C4 2.995 5.023 2 6.286 2h9.143c1.262 0 2.285.995 2.285 2.222v2.222"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "BookClose";

export const BookClose: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
