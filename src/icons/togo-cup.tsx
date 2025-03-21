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
				d="M3 5.4A2.4 2.4 0 0 1 5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v0a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6M5 6h14l-1.555 14.218A2 2 0 0 1 15.457 22H8.543a2 2 0 0 1-1.988-1.782z"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
			<Path
				stroke={color}
				d="m6.313 18-.875-8h13.125l-.875 8z"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</Svg>
	);
};

IconComponent.displayName = "TogoCup";

export const TogoCup: NamedExoticComponent<IconProps> =
	memo<IconProps>(IconComponent);
