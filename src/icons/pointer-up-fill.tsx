import { memo } from "react";
import type { NamedExoticComponent, PropsWithRef } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "./IconProps";

const IconComponent = (props: PropsWithRef<IconProps>) => {
	const { color = "black", size = 24, ...otherProps } = props;

	return (
		<Svg width={size} height={size} fill="none" {...otherProps}>
			<Path
				fill={color}
				d="M20.05 6.35a3 3 0 0 1 1.2 2.4v11a3 3 0 0 1-3 3h-12a3 3 0 0 1-3-3v-11a3 3 0 0 1 1.2-2.4l6-4.5a3 3 0 0 1 3.6 0z"
				fillRule="evenodd"
				clipRule="evenodd"
			/>
		</Svg>
	);
};

IconComponent.displayName = "PointerUpFill";

export const PointerUpFill: NamedExoticComponent<IconProps> =
	memo<IconProps>(IconComponent);
