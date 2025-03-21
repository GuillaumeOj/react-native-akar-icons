import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Rect, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
	const { color = "black", size = 24, ...otherProps } = props;

	return (
		<Svg width={size} height={size} fill="none" {...otherProps}>
			<Rect
				width="20"
				height="16"
				x="2"
				y="4"
				stroke={color}
				rx="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
			<Rect
				width="9"
				height="7"
				x="13"
				y="13"
				stroke={color}
				rx="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</Svg>
	);
};

IconComponent.displayName = "Miniplayer";

export const Miniplayer: NamedExoticComponent<IconProps> =
	memo<IconProps>(IconComponent);
