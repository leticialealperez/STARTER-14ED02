import styled from 'styled-components';

const ButtonStyled = styled.button`
	width: 60%;
	padding: 24px;
	font-weight: 700;
	background-color: ${(props) => props.theme.colors['dark'].secondary};
	color: ${(props) => props.theme.colors['dark'].fontColor};
	font-size: ${(props) => props.theme.fontSizes.small};
	border-radius: 5px;
	margin: 12px 0 84px;
	border: none;
	cursor: pointer;
	transition: background-color 0.3s;

	&:hover {
		background-color: ${(props) => props.theme.colors['dark'].primary};
	}
`;

export default ButtonStyled;
