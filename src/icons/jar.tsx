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
        d="m3 9 1.164 8.926a3.875 3.875 0 0 0 2.844 3.243v0c3.27.872 6.713.872 9.984 0v0a3.875 3.875 0 0 0 2.844-3.243L21 9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="M5.035 7.266C3.763 7.661 3 8.165 3 8.714 3 9.977 7.03 11 12 11s9-1.023 9-2.286c0-.55-.764-1.054-2.037-1.448"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        stroke={color}
        d="m9 4-3 .51C4.159 4.874 3 5.407 3 6c0 1.105 4.03 2 9 2s9-.895 9-2c0-.592-1.159-1.125-3-1.49L15 4M15 4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

IconComponent.displayName = "Jar";

export const Jar: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
