import styled from 'styled-components';

const InputStyled = styled.input`
	width: 60%;
	padding: 24px;
	background: #e6e6e6;
	border-radius: 5px;
	border: none;

	font-size: ${(props) => props.theme.fontSizes.small};

	&:focus {
		outline-color: ${(props) => props.theme.colors['dark'].secondary};
	}
`;

export default InputStyled;
