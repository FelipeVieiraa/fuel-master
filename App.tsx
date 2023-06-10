import 'src/services/i18n';
import Routes from 'src/routes';
import ThemeProvider from 'src/contexts/ThemeProvider';
import LoginProvider from 'src/contexts/LoginProvider';

export default function App() {
	return (
		<ThemeProvider>
			<LoginProvider>
				<Routes />
			</LoginProvider>
		</ThemeProvider>
	);
}
