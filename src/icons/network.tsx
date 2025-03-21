import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Path, Svg, Circle as _Circle } from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
	const { color = "black", size = 24, ...otherProps } = props;

	return (
		<Svg width={size} height={size} fill="none" {...otherProps}>
			<_Circle cx="18" cy="5" r="3" stroke={color} strokeWidth="2" />
			<_Circle cx="18" cy="19" r="3" stroke={color} strokeWidth="2" />
			<_Circle cx="6" cy="12" r="3" stroke={color} strokeWidth="2" />
			<Path
				stroke={color}
				d="m15.408 6.512-6.814 3.975m6.814 7.001-6.814-3.975"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</Svg>
	);
};

IconComponent.displayName = "Network";

export const Network: NamedExoticComponent<IconProps> =
	memo<IconProps>(IconComponent);
