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
				d="M8 2 2 8.156V16l6 6h8l6-6V8.156L16 2z"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
			<Path stroke={color} d="M16 12H8" strokeLinecap="round" strokeWidth="2" />
		</Svg>
	);
};

IconComponent.displayName = "Stop";

export const Stop: NamedExoticComponent<IconProps> =
	memo<IconProps>(IconComponent);
