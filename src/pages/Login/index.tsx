import { useContext } from 'react';
import { Button, Text } from '@ui-kitten/components';

import { ThemeContext } from '../../contexts/ThemeProvider';
import Screen from '../../components/Screen';

const Login = () => {
	const { setTheme, theme } = useContext(ThemeContext);

	return (
		<Screen level="3">
			<Text>Login</Text>
			<Button
				style={{ marginTop: 40 }}
				status="primary"
				onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			>
				{`is ${theme} change to ${theme === 'dark' ? 'light' : 'dark'}`}
			</Button>
		</Screen>
	);
};

export default Login;
