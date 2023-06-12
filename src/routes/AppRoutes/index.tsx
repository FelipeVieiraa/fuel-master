import { CompositeNavigationProp } from '@react-navigation/native';
import {
	createNativeStackNavigator,
	type NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { Dashboard } from '@pages';

import SelectVehicle from 'src/pages/SelectVehicle';

type RootStackParamList = {
	SelectVehicle: undefined;
	Dashboard: undefined;
};

export type CompositeNavigations = CompositeNavigationProp<
	NativeStackNavigationProp<any>,
	NativeStackNavigationProp<RootStackParamList>
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppRoutes = () => {
	return (
		<Stack.Navigator initialRouteName="SelectVehicle">
			<Stack.Screen
				name="SelectVehicle"
				component={SelectVehicle}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Dashboard"
				component={Dashboard}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export default AppRoutes;
