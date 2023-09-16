import Switch from '@mui/material/Switch';
import styled from 'styled-components';

const SwitchThemeStyled = styled(Switch)`
	span {
		color: ${(props) => props.theme.colors.fontColor};
	}
`;

export default SwitchThemeStyled;
