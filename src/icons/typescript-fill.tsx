import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { ClipPath, Defs, G, Path, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
  const { color = "black", size = 24, ...otherProps } = props;

  return (
    <Svg width={size} height={size} fill="none" {...otherProps}>
      <G clipPath="url(#a)">
        <Path
          fill={color}
          d="M23.429 0H.57A.57.57 0 0 0 0 .571V23.43c0 .315.255.571.571.571H23.43a.57.57 0 0 0 .571-.571V.57A.57.57 0 0 0 23.429 0m-9.143 12.826h-2.857v8.888H9.143v-8.888H6.286v-1.969h8zm.64 8.38v-2.375s1.298.978 2.855.978 1.497-1.018 1.497-1.158c0-1.477-4.412-1.477-4.412-4.751 0-4.452 6.429-2.695 6.429-2.695l-.08 2.116s-1.078-.719-2.296-.719-1.657.58-1.657 1.198c0 1.597 4.452 1.438 4.452 4.652 0 4.95-6.788 2.755-6.788 2.755"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill={color} d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

IconComponent.displayName = "TypescriptFill";

export const TypescriptFill: NamedExoticComponent<IconProps> =
  memo<IconProps>(IconComponent);
