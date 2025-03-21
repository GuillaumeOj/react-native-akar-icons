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
				d="M21.99 7.16q-.139 3.04-4.28 8.323Q13.43 21 10.462 21q-1.837-.002-3.106-3.359c-.564-2.055-1.127-4.11-1.697-6.16Q4.72 8.124 3.634 8.122c-.155 0-.707.33-1.645.98L1 7.837c1.035-.906 2.06-1.805 3.066-2.71 1.38-1.185 2.422-1.805 3.112-1.868 1.633-.153 2.64.951 3.02 3.325.408 2.556.69 4.15.851 4.77q.708 3.185 1.553 3.183.657 0 1.979-2.066 1.32-2.066 1.415-3.143.19-1.783-1.415-1.782-.75 0-1.553.342 1.546-5.03 5.913-4.885c2.157.057 3.175 1.446 3.049 4.156"
			/>
		</Svg>
	);
};

IconComponent.displayName = "VimeoFill";

export const VimeoFill: NamedExoticComponent<IconProps> =
	memo<IconProps>(IconComponent);
