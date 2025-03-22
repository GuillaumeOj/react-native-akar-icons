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
        fill={color}
        d="M12 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M12 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
  );
};

IconComponent.displayName = "MoreVerticalFill";

export const MoreVerticalFill: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
