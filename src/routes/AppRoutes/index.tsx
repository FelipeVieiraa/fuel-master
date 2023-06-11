import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Dashboard } from '@pages';

import SelectVehicle from 'src/pages/SelectVehicle';

const Stack = createNativeStackNavigator();

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
