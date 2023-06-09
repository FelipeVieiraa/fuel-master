import { NavigationContainer } from '@react-navigation/native';

import LoginRoutes from './LoginRoutes';
import AppRoutes from './AppRoutes';
import { useContext } from 'react';
import { LoginContext } from 'src/contexts/LoginProvider';

const Routes = () => {
	const { isAuthenticated } = useContext(LoginContext);

	return (
		<NavigationContainer>
			{isAuthenticated ? <AppRoutes /> : <LoginRoutes />}
		</NavigationContainer>
	);
};

export default Routes;
