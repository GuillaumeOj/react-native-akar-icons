import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Path, Svg, Circle as _Circle } from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
	const { color = "black", size = 24, ...otherProps } = props;

	return (
		<Svg width={size} height={size} fill="none" {...otherProps}>
			<_Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
			<Path
				stroke={color}
				d="M12 7h.01"
				strokeLinecap="round"
				strokeWidth="2"
			/>
			<Path
				stroke={color}
				d="M10 11h2v5M10 16h4"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			/>
		</Svg>
	);
};

IconComponent.displayName = "Info";

export const Info: NamedExoticComponent<IconProps> =
	memo<IconProps>(IconComponent);
