import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Path, Rect, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
	const { color = "black", size = 24, ...otherProps } = props;

	return (
		<Svg width={size} height={size} fill="none" {...otherProps}>
			<Rect
				width="18"
				height="12"
				x="2"
				y="6"
				stroke={color}
				rx="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
			<Path
				stroke={color}
				d="M20 10h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H20zM7 10v4M11 10v4"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</Svg>
	);
};

IconComponent.displayName = "BatteryMedium";

export const BatteryMedium: NamedExoticComponent<IconProps> =
	memo<IconProps>(IconComponent);
