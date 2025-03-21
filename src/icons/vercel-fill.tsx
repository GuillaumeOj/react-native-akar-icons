import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
	const { color = "black", size = 24, ...otherProps } = props;

	return (
		<Svg width={size} height={size} fill="none" {...otherProps}>
			<Path fill={color} d="m12 1 12 21H0z" />
		</Svg>
	);
};

IconComponent.displayName = "VercelFill";

export const VercelFill: NamedExoticComponent<IconProps> =
	memo<IconProps>(IconComponent);
