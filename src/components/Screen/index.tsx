import { Layout, useStyleSheet } from '@ui-kitten/components';
import { ScrollView } from 'react-native';

import { ScreenComponentType, ScreenProps } from './types';
import styles from './styles';

const Screen = ({ children, scrollEnabled, ...rest }: ScreenProps) => {
	const Component: ScreenComponentType = scrollEnabled ? ScrollView : Layout;
	const sx = useStyleSheet(styles);

	return (
		<Component {...rest} style={[sx.container, rest.style]}>
			{children}
		</Component>
	);
};

export default Screen;
