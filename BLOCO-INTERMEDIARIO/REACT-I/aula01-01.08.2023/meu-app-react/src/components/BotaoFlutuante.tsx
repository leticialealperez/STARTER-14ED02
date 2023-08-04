import styled from 'styled-components';

const BotaoFlutuante = styled.button`
	position: fixed;
	right: 40px;
	bottom: 40px;
	width: 70px;
	height: 70px;
	border-radius: 50%;
	background-color: ${(props) => props.theme.btnColor};
	border: none;
	font-size: 28px;
	color: white;
	cursor: pointer;

	&:hover {
		background-color: #fff;
		border: 2px solid ${(props) => props.theme.btnColor};
		color: ${(props) => props.theme.btnColor};
		transition: 0.5s;
	}

	/* &:active {

	}

	&:checked {

	} */
`;

export default BotaoFlutuante;
