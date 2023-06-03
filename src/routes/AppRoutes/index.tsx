import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '@pages';

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Login" component={Login} />
		</Stack.Navigator>
	);
};

export default AppRoutes;
