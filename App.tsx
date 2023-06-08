import Routes from 'src/routes';
import ThemeProvider from 'src/contexts/ThemeProvider';

export default function App() {
	return (
		<ThemeProvider>
			<Routes />
		</ThemeProvider>
	);
}
