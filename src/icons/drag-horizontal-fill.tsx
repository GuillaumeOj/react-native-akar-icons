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
				d="M22 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0M22 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0M6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0M6 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
				fillRule="evenodd"
				clipRule="evenodd"
			/>
		</Svg>
	);
};

IconComponent.displayName = "DragHorizontalFill";

export const DragHorizontalFill: NamedExoticComponent<IconProps> =
	memo<IconProps>(IconComponent);
