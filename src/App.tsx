import Routes from './routes';
import ThemeProvider from './contexts/ThemeProvider';

export default function App() {
	return (
		<ThemeProvider>
			<Routes />
		</ThemeProvider>
	);
}
