import { KeyboardAvoidingViewProps, ScrollViewProps } from 'react-native';

export type FormProps = ScrollViewProps & KeyboardAvoidingViewProps;

export type FormComponentType = React.ComponentType<
	ScrollViewProps | KeyboardAvoidingViewProps
>;
