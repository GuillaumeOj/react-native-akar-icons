import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Path, Svg, Circle as _Circle } from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
	const { color = "black", size = 24, ...otherProps } = props;

	return (
		<Svg width={size} height={size} fill="none" {...otherProps}>
			<_Circle
				cx="6"
				cy="15"
				r="4"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
			<_Circle
				cx="18"
				cy="15"
				r="4"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
			<Path
				stroke={color}
				d="m6 15 2-7h7.5M6 5h3M18 15 15 5h4M19 5h.5A1.5 1.5 0 0 1 21 6.5v0A1.5 1.5 0 0 1 19.5 8H19"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</Svg>
	);
};

IconComponent.displayName = "Bicycle";

export const Bicycle: NamedExoticComponent<IconProps> =
	memo<IconProps>(IconComponent);
