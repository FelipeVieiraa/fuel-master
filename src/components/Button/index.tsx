import { useCallback } from 'react';
import {
	Button as UiKitButton,
	ButtonProps,
	useStyleSheet,
	Spinner,
	Icon,
} from '@ui-kitten/components';

import styles from './styles';

type UiKitButtonProps = ButtonProps & {
	loading?: boolean;
	icon?: string;
	rounded?: boolean;
};

const Button = ({ loading, icon, rounded, ...rest }: UiKitButtonProps) => {
	const sx = useStyleSheet(styles);

	const LoadingIndicator = useCallback(
		(): React.ReactElement => <Spinner size="small" status="basic" />,
		[]
	);

	const renderAccessoryLeft = (iconProps: any): any => {
		if (loading) {
			return <LoadingIndicator />;
		}

		if (icon) {
			return <Icon {...iconProps} name={icon} />;
		}
	};

	return (
		<UiKitButton
			accessoryLeft={renderAccessoryLeft}
			{...rest}
			style={[sx.button, rest.style, rounded ? sx.roundedButton : {}]}
		/>
	);
};

export default Button;
