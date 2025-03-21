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
				d="M12 19V5m6 14V5M6 19V5"
				strokeLinecap="round"
				strokeWidth="2"
			/>
		</Svg>
	);
};

IconComponent.displayName = "ThreeLineVertical";

export const ThreeLineVertical: NamedExoticComponent<IconProps> =
	memo<IconProps>(IconComponent);
