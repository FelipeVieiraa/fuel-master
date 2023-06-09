import { useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import {
	Icon,
	Text,
	Input as UiKitInput,
	InputProps,
	useStyleSheet,
	Spinner,
} from '@ui-kitten/components';

import styles from './styles';

type UiKitInputProps = InputProps & {
	error?: boolean;
	isLoading?: boolean;
	icon?: string;
	iconPress?: () => void;
};

const Input = (props: UiKitInputProps) => {
	const sx = useStyleSheet(styles);
	const [secureTextEntry, setSecureTextEntry] = useState(props.secureTextEntry);
	const toggleSecureEntry = () => {
		setSecureTextEntry(!secureTextEntry);
	};

	const Loading = () => (
		<View style={sx.loadingContainer}>
			<Spinner size="tiny" />
		</View>
	);

	const renderAccessoryRight = (iconProps: any): any => {
		if (props.isLoading) {
			return <Loading />;
		}

		if (props.icon) {
			return (
				<TouchableWithoutFeedback onPress={props.iconPress}>
					<Icon {...iconProps} name={props.icon} />
				</TouchableWithoutFeedback>
			);
		}

		if (props.secureTextEntry) {
			return (
				<TouchableWithoutFeedback onPress={toggleSecureEntry}>
					<Icon {...iconProps} name={!secureTextEntry ? 'eye-off' : 'eye'} />
				</TouchableWithoutFeedback>
			);
		}
	};

	const renderCaption = () => {
		if (!props.caption) return <></>;

		if (typeof props.caption === 'string') {
			return (
				<View style={sx.captionContainer}>
					<Icon name="alert-circle-outline" {...styles.captionIcon} />
					<Text style={[sx.captionText, props.error && sx.colorError]}>
						{props.caption.toString()}
					</Text>
				</View>
			);
		}

		if (typeof props.caption === 'function') {
			return props.caption();
		}

		return <></>;
	};

	return (
		<UiKitInput
			status={props.error ? 'danger' : 'primary'}
			autoCapitalize="none"
			inputMode="text"
			accessoryRight={renderAccessoryRight}
			{...props}
			caption={renderCaption}
			style={[sx.input, props.style]}
			secureTextEntry={secureTextEntry}
		/>
	);
};

export default Input;
