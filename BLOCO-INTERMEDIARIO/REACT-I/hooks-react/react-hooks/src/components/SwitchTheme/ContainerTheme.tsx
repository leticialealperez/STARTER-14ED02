import { useGlobalContext } from '../../config/GlobalContext';
import ContainerThemeStyled from './ContainerThemeStyled';
import DarkModeIcon from './DarkModeIcon';
import LightModeIcon from './LightModeIcon';
import SwitchThemeStyled from './SwitchThemeStyled';

function ContainerTheme() {
	const { toggleTheme } = useGlobalContext();
	return (
		<ContainerThemeStyled>
			<div>
				<LightModeIcon />
				<SwitchThemeStyled
					inputProps={{ 'aria-label': 'switch theme' }}
					color='default'
					onChange={toggleTheme}
				/>
				<DarkModeIcon />
			</div>
		</ContainerThemeStyled>
	);
}

export default ContainerTheme;
