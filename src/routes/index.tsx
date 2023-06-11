import { useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { LoginContext } from '@contexts';

import AppRoutes from './AppRoutes';
import LoginRoutes from './LoginRoutes';

const Routes = () => {
	const { isAuthenticated } = useContext(LoginContext);

	return (
		<NavigationContainer>
			{isAuthenticated ? <AppRoutes /> : <LoginRoutes />}
		</NavigationContainer>
	);
};

export default Routes;
