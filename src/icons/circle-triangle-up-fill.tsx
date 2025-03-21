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
				d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1M8.8 14a.81.81 0 0 1-.705-.396.71.71 0 0 1 .04-.77l3.2-4.5A.82.82 0 0 1 12 8c.268 0 .517.125.666.334l3.2 4.5a.71.71 0 0 1 .04.77.81.81 0 0 1-.706.396z"
				fillRule="evenodd"
				clipRule="evenodd"
			/>
		</Svg>
	);
};

IconComponent.displayName = "CircleTriangleUpFill";

export const CircleTriangleUpFill: NamedExoticComponent<IconProps> =
	memo<IconProps>(IconComponent);
