import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
  const { color = "black", size = 24, ...otherProps } = props;

  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <Path
        stroke={color}
        d="M15.244 21.366a2.164 2.164 0 0 1-3.061 0l-8.549-8.549A2.16 2.16 0 0 1 3 11.287V5.164C3 3.97 3.97 3 5.164 3h6.123c.573 0 1.124.228 1.53.634l8.549 8.549a2.164 2.164 0 0 1 0 3.061z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M6.5 6.5 7 7"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "Tag";

export const Tag: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
