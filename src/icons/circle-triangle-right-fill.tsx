import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
  const { color = "black", size = 24, ...otherProps } = props;

  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <Path
        fill={color}
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1m-2 7.8c0-.295.152-.566.396-.705a.71.71 0 0 1 .77.04l4.5 3.2A.82.82 0 0 1 16 12a.82.82 0 0 1-.334.666l-4.5 3.2a.71.71 0 0 1-.77.04A.81.81 0 0 1 10 15.2z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
  );
};

IconComponent.displayName = "CircleTriangleRightFill";

export const CircleTriangleRightFill: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
