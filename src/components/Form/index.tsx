import { useStyleSheet } from '@ui-kitten/components';
import { KeyboardAvoidingView, ScrollView } from 'react-native';

import { FormComponentType, FormProps } from './types';
import styles from './styles';

const Form = ({ children, scrollEnabled, ...rest }: FormProps) => {
	const Component: FormComponentType = scrollEnabled
		? ScrollView
		: KeyboardAvoidingView;
	const sx = useStyleSheet(styles);

	return (
		<Component {...rest} style={[sx.container, rest.style]}>
			{children}
		</Component>
	);
};

export default Form;
