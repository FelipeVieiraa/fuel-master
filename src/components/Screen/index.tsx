import { SafeAreaView, ScrollView } from 'react-native';

import { Layout, useStyleSheet } from '@ui-kitten/components';

import styles from './styles';
import { ScreenComponentType, ScreenProps } from './types';

const Screen = ({ children, scrollEnabled, safe, ...rest }: ScreenProps) => {
	const Component: ScreenComponentType = scrollEnabled ? ScrollView : Layout;
	const sx = useStyleSheet(styles);

	return (
		<Component {...rest} style={[sx.container, rest.style]}>
			{safe ? (
				<SafeAreaView style={sx.container}>{children}</SafeAreaView>
			) : (
				children
			)}
		</Component>
	);
};

export default Screen;
