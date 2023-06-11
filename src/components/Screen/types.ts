import { ScrollViewProps } from 'react-native';

import { LayoutProps } from '@ui-kitten/components';

export type ScreenProps = ScrollViewProps &
	LayoutProps & {
		safe?: boolean;
	};

export type ScreenComponentType = React.ComponentType<
	ScrollViewProps | LayoutProps
>;
