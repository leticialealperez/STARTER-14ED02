import { DarkMode } from '@mui/icons-material';
import styled from 'styled-components';

const DarkModeIcon = styled(DarkMode)`
	color: ${(props) => props.theme.colors.fontColor};
`;

export default DarkModeIcon;
