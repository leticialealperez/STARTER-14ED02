import GlobalStyle from './config/GlobalStyle';
import DefaultThemeApp from './config/theme/DefaultTheme';
import RoutesApp from './routes/RoutesApp';

function App() {
	return (
		<DefaultThemeApp>
			<GlobalStyle />
			<RoutesApp />
		</DefaultThemeApp>
	);
}

export default App;
