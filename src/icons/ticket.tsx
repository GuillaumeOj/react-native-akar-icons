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
        d="M8.707 3.293c-.39.39-.369 1.021-.138 1.523a2.83 2.83 0 0 1-3.753 3.753c-.502-.23-1.133-.252-1.523.138l-.586.586a1 1 0 0 0 0 1.414l10.586 10.586a1 1 0 0 0 1.414 0l.586-.586c.39-.39.369-1.021.138-1.523a2.83 2.83 0 0 1 3.753-3.753c.502.23 1.133.252 1.523-.138l.586-.586a1 1 0 0 0 0-1.414L10.707 2.707a1 1 0 0 0-1.414 0z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
};

IconComponent.displayName = "Ticket";

export const Ticket: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
