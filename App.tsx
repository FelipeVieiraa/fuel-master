import 'src/services/i18n';

import { LoginProvider, ThemeProvider } from '@contexts';

import Routes from 'src/routes';

export default function App() {
	return (
		<ThemeProvider>
			<LoginProvider>
				<Routes />
			</LoginProvider>
		</ThemeProvider>
	);
}
