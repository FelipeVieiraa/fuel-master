import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '@pages';

const Stack = createNativeStackNavigator();

const LoginRoutes = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Login"
				component={Login}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export default LoginRoutes;
