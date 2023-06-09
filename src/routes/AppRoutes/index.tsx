import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Dashboard } from '@pages';

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Login"
				component={Dashboard}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export default AppRoutes;
